from fastapi import APIRouter, HTTPException
import bcrypt, datetime
from db.connection import get_connection
from api.schemas.user import LoginRequest, User

router = APIRouter()

# hashea la contraseña recibida en texto plano
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

# compara la contraseña en texto plano con el hash guardado en la base de datos
def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode("utf-8"), hashed.encode("utf-8"))

# checkeo de la existencia del correo usuario existente dentro de la base de datos
@router.get("/users/{email}")
def get_user(email: str): # recibe como parametro el correo
    with get_connection() as conn:
        with conn.cursor() as cursor:
            # busca correo en la base de datos
            cursor.execute(
                'SELECT id_user, name, email FROM "USERS" WHERE email = %s',
                (email,)
            )
            # recuperar datos desde la base de datos
            user = cursor.fetchone()

    # logica de devolucion si no existe
    if user is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    return user

# validador de contraseña
@router.post("/login")
def login(data: LoginRequest):
    with get_connection() as conn:
        with conn.cursor() as cursor:
            # busca el usuario por correo en la base de datos
            cursor.execute(
                'SELECT id_user, name, pwd FROM "USERS" WHERE email = %s',
                (data.email,)
            )
            # recuperar datos desde la base de datos
            user = cursor.fetchone()

    # si no existe el usuario se rechaza antes de verificar la contraseña
    if user is None:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    # se verifica el hash de la contraseña con el de la base de datos
    if not verify_password(data.password, user["pwd"]):
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    return {"mensaje": "Login exitoso", "id_user": user["id_user"], "name": user["name"]}

@router.post("/registro")
def registrar_usuario(data: User):
    try:
        contrasenia_hasheada = hash_password(password= data.pwd)
        with get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                'SELECT * FROM "USERS" WHERE email = %s',
                (data.email,))
                respuesta = cursor.fetchone()
                if respuesta is not None:
                    cursor.execute("INSERT IN TO USERS(id_user, name, email, pwd, rol, is_active, creation_time) " \
                    "VALUES (default,%s,%s,%s, 1, true, %s)", (data.name, data.email, contrasenia_hasheada,datetime.datetime.now()))
                    return HTTPException(status_code = 200, detail="Usuario registrado con exito")
                else: 
                    return HTTPException(status_code = 409, detail="El email en uso")
    except:
        return HTTPException(status_code = 500, detail="Se cayo el sistema")


"""
Credenciales de prueba

admin@test.com
admin1234

"""