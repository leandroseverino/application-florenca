cd "in"
while sleep 1;do
    for i in *; do
        if [ -e "$i" ]; then
            convert -thumbnail 750x500! "$i" "750x500-$i"
            mv "750x500-$i" ../750/
            echo "$i 750x500 Convertido !"
            
            convert -thumbnail 653x298! "$i" "653x298-$i"
            mv "653x298-$i" ../653/
            echo "$i 653x298 Convertido !"
            
            convert -thumbnail 500x300! "$i" "500x300-$i"
            mv "500x300-$i" ../500/
            echo "$i 500x300 Convertido !"
            
            convert -thumbnail 360x231! "$i" "360x231-$i"
            mv "360x231-$i" ../360/
            echo "$i 360x231 Convertido !"
            
            rm -f "$i"
        fi
    done
done
