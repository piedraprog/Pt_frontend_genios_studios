import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TableUI } from "@/components/ui/table";
import Image from "next/image";
import PublicTopBar from "../_components/publicTopBar";

const HomePage = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <PublicTopBar />
      {/* ... */}

      {/* Dashboard content */}
      <div className="p-8">

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico Circular</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aquí iría el componente de gráfico circular */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gráfico de Barras</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aquí iría el componente de gráfico de barras */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Imagen</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/api/placeholder/300/200" alt="Placeholder" width={300} height={200} />
            </CardContent>
          </Card>
        </div>
        {/* ... */}

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Gráfico de Barras con Botones</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aquí iría el componente de gráfico de barras */}
              <div className="flex justify-center space-x-2 mt-4">
                <Button>Botón 1</Button>
                <Button>Botón 2</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gráfico de Líneas</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aquí iría el componente de gráfico de líneas */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gráfico Circular y Palabras más Usadas</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aquí iría el componente de gráfico circular */}
              <TableUI>
                {/* Aquí iría el contenido de la tabla */}
              </TableUI>
            </CardContent>
          </Card>
        </div>
        {/* ... */}

        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Conteo de Data Total por Días</CardTitle>
            </CardHeader>
            <CardContent>
              <TableUI>
                {/* Aquí iría el contenido de la tabla */}
              </TableUI>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Datos Random</CardTitle>
            </CardHeader>
            <CardContent>
              <TableUI>
                {/* Aquí iría el contenido de la tabla */}
              </TableUI>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Usuarios que han Ingresado Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <TableUI>
                {/* Aquí iría el contenido de la tabla */}
              </TableUI>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Volumen de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Aquí iría el componente de gráfico de barras */}
            </CardContent>
          </Card>
        </div>
        {/* ... */}
      </div>
    </div >
  )
}