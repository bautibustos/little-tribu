from fastapi import APIRouter, Response
from fastapi.responses import JSONResponse  
import os, json

router = APIRouter()

class Product():
    slug_product: int    
    name_product: str
    img: str
    precio: float 
    description: str


    def nuevo(self, name_product, img, precio, description):
        with open("product_list.json", "r") as file:
            datos_old = json.load(file)
        # leo cual es el ultimo el item del diccionario lo paso a entero y le sumo uno    
        ultimo_item=str(int(list(datos_old)[-1])+1)
        
        # genero y cargo el nuevo item
        datos_old[ultimo_item]={
            "name_product":name_product,
            "img":img,
            "precio":precio,
            "description": description   
        }
        # actualizo el archivo
        with open("product_list.json", "w") as file:
            json.dump(datos_old, file, indent=4)
    
    @staticmethod 
    def listados():
        with open("backend\\api\\routes\\content\\product_list.json", "r") as file:
            listado = json.load(file)
        return JSONResponse(status_code=200, content=listado)


@router.get("/product-list")
def post_products():
    return Product.listados()

if __name__ == "__main__":
    p = Product() 
    
    p.nuevo(
        name_product="costilla",
        img="imagennueva", 
        precio=2.5, 
        description="esto es una description"
    )

    print(p.listados())
