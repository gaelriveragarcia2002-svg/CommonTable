# Al igual que comandos ng comunes de angular a los comandos nx les podemos pasar las mismas configuraciones para poder iniciar la aplicacion en puertos o una ip especificas.

# Ejemplo de comando con ng y con nx.
# El -- es para que Nx pase los argumentos directamente al dev server de Angular.

## ng serve -configuration=qa --port=4201 --host=0.0.0.0 --ssl=true
## nx serve my-app --configuration=development -- --port=4201 --host=0.0.0.0 --ssl=true