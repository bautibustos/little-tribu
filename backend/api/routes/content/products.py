from fastapi import APIRouter, HTTPException, Response
#from backend.api.schemas.product import Product
import os, json

#router = APIRouter()

class Producto():
    nombre_producto: str
    nombre_imagen: str
    precio: float 
    descripcion: str

    def nuevo(self, nombre_producto, nombre_imagen, precio, descripcion):
        with open("product_list.json", "r") as file:
            datos_old = json.load(file)
        # leo cual es el ultimo el item del diccionario lo paso a entero y le sumo uno    
        ultimo_item=str(int(list(datos_old)[-1])+1)
        
        # genero y cargo el nuevo item
        datos_old[ultimo_item]={
            "nombre_producto":nombre_producto,
            "nombre_imagen":nombre_imagen,
            "precio":precio,
            "descripcion": descripcion   
        }
        # actualizo el archivo
        with open("product_list.json", "w") as file:
            json.dump(datos_old, file, indent=4)
    
    def listados():
        with open("product_list.json", "r") as file:
            datos_old = json.load(file)

if __name__ == "__main__":
    p = Producto() 
    
    p.nuevo(
        nombre_producto="costilla",
        nombre_imagen="imagennueva", 
        precio=2.5, 
        descripcion="esto es una descripcion"
    )

    print(Producto.listados())
