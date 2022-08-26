from fastapi import FastAPI, Request, File
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

# Setup
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/")
def home(request: Request): 
    return templates.TemplateResponse("home.html", {"request": request})

@app.get("/quiz")
def apply(request: Request): 
    return templates.TemplateResponse("quiz.html", {"request": request})

@app.get("/about")
def about(request: Request): 
    return templates.TemplateResponse("about.html", {"request": request})