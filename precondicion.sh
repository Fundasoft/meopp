#!/bin/bash

############################################################
# Precondiciones	
############################################################

echo ""
echo "Precondiciones bash"
echo ""

# convertir imagenes para mobiles
#convert login.jpeg -resize 450 loginX450.jpeg

# calidad imagenes para web
#convert logine.jpeg -quality 20% login.jpeg

#-----------------------------------------------------------
# Eliminar *.logs
#-----------------------------------------------------------

if [ -d "logs" ]; then
	
	cantidad=0
	
	# Utilizamos un bucle for para iterar sobre todos los archivos *.log en el directorio actual
	for file in *.log; do
		# Verificamos si el archivo actual existe
		if [ -e "$file" ]; then
		    # Eliminamos el archivo
		    rm -f "$file"
		    # Incrementamos el contador de archivos eliminados
		    ((cantidad++))
		fi
	done

	# Mostramos la cantidad de archivos eliminados
	echo "Se eliminaron $cantidad archivos *.log"

fi;

#-----------------------------------------------------------
# Copiar plantilla
#-----------------------------------------------------------

#if [ -d "PLANTILLA" ]; then
#	echo "Copia PLANTILLA"
#	rsync -azP PLANTILLA/views/public/. views/public
#	rsync -azP PLANTILLA/views/svelte/. views/svelte
#fi;

############################################################
# Precondicion testing
############################################################

testing=".build/testing.build"

if [ -f "$testing" ]; then
	rm $testing
fi

echo "I|$(date)" > $testing

#-----------------------------------------------------------
# busqueda de archivos grandes
#-----------------------------------------------------------

find . \( -path "./.git" -o -path "./node_modules" \) -prune -o -name server -o -name server.mac -o -type f -size +1M -exec du -h {} + | awk '$1 ~ /M$/ {print}' >> $testing

sed -i '2,$s/^/W|/g' $testing

#-----------------------------------------------------------
# chequeo plantilla html
#-----------------------------------------------------------

# Directorio donde se buscarán los archivos HTML
directorio="./views/public"

# Buscar archivos HTML en el directorio especificado
htmls=$(find "$directorio" -maxdepth 1 -type f -name '*.html')

# Buscar archivos HTML en el directorio especificado
find "$directorio" -maxdepth 1 -type f -name '*.html' | while IFS= read -r archivo; do
    # Usar grep para buscar el string en el archivo
    if ! grep -q 'name="xen" content="version:genesis' "$archivo"; then
        echo "E|El archivo '$(basename "$archivo")' no corresponde a la plantilla xenplate" >> $testing
    fi
done

#-----------------------------------------------------------
# chequeo que no existan imagenes sueltas en images
#-----------------------------------------------------------

archivos=$(find "./views/public/images" -maxdepth 1 -type f)

if [ -n "$archivos" ]; then
	echo "W|Las imagenes en public/images deben asignarse a una carpeta" >> $testing
fi

#-----------------------------------------------------------
# chequeo que no existan documentos sueltos en documents
#-----------------------------------------------------------


archivos=$(find "./views/public/documents" -maxdepth 1 -type f)

if [ -n "$archivos" ]; then
	echo "W|Las documents en public/documents deben asignarse a una carpeta" >> $testing
fi

#-----------------------------------------------------------
# VSCode agrega codigo que puede llegar a 
#-----------------------------------------------------------

# Buscar en todos los archivos .svelte dentro del directorio base y sus subdirectorios
cadena=$(grep -rl "\.\./\.\./\.\." "./views/svelte")

if [ -n "$cadena" ]; then
		echo "E|Encadenamiento excedido ../../..: $(echo "$cadena" | tr '\n' ' ')" >> $testing
fi





