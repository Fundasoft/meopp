<script>
    let CLIENTE = PROYECTO.cliente.nombre
</script>

<section >

    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">{CLIENTE}</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
                ¡Le damos la bienvenida al nuevo panel de control del sistema! ¿Te has preguntado cómo puedes obtener estadísticas y reportes precisos de tus datos en un solo lugar? ¡Aquí es donde todo cobra vida! 
                Podras tener una seccion dedicada exclusivamente a la creación de estadísticas y reportes personalizados. 
                <br>
                ¡Esperamos aportes e ideas!
            </p>

            <div class="container text-center">
                <div class="row g-1">

                    <div class="col">
                        <div class="p-2 d-flex justify-content-center">
                            <div class="card mb-3 text-center" style="width: 10rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Visitas <i class="bi bi-eye"></i></h5>
                                    <p class="card-text">Cantidad de Visitas recibidas</p>
                                    <h4 class="card-text">{5}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-2 d-flex justify-content-center">
                            <div class="card mb-3 text center" style="width: 10rem;">
                                <div class="card-body">
                                <h5 class="card-title">Usuarios <i class="bi bi-person"></i></h5>
                                <p class="card-text">Cantidad de usuarios</p>
                                <h4 class="card-text">{3}</h4>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>

</section>

<style>

</style>