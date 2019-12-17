    var Producto = new Array()
    Producto[0] = ["Pantalon","Camisa"]
    Producto[1] = ["Fruta","Cereal"]
                        
                        
    var Categorias = new Array()
    Categorias[0] = new Array()
    Categorias[1] = new Array()
    Categorias[0][0] = ["Pantalon1","Pantalon2"]
    Categorias[0][1] = ["Camisa1","Camisa2"]
    Categorias[1][0] = ["Fruta1","Fruta2"]
    Categorias[1][1] = ["Cereal1","Cereal2"]

                        
    function ponProducto(formu)
    {	var elProd = formu.prod.selectedIndex
    formu.categ.length = Producto[elProd].length
        for (i=0; i<formu.categ.length; i++)
        {	formu.categ.options[i].text = Producto[elProd][i]
        }
    }
    function ponCategorias(formu)
    {	var elProd = formu.prod.selectedIndex
    var laCat = formu.categ.selectedIndex
    formu.subCat.length = Categorias[elProd][laCat].length
        for (i=0; i<formu.subCat.length; i++)
        {	formu.subCat.options[i].text = Categorias[elProd][laCat][i]
        }
    }
                   