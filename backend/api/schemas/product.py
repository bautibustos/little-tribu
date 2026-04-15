from datetime import datetime
from pydantic import BaseModel

class Product(BaseModel):
    slug_product: int
    name_product: str
    img: str
    description: str