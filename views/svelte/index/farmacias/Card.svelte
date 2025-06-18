<script>
    import Map from "./Map.svelte";
    export let value, trash, render, edit;
    [render,trash,edit];

    // export let { nombre, direccion, horarios, telefono } = farmacia;
    // {
    // nombre: "Neuquén Capital",
    // direccion: "Santa Cruz 275",
    // horarios: "Lun a Vie de 8 a 20 - Sáb 9 a 13",
    // telefono: "299-4567890"
    // };

    function onClickUbicacion(){
        modal("", html(Map, {ubicacion:value.ubicacion}))
    }

</script>

<div class="pharmacy-card">
    <div class="card-header">
        <h3 class="pharmacy-name">{value.nombre}</h3>
    </div>

    <div class="card-body">
        <p class="address">{value.direccion}</p>
        <p class="hours">{value.horarios}</p>
    </div>

    <div class="card-footer">
        <div class="contact-info">
        <button class="phone">
            <i class="bi bi-telephone icon"></i>
            <span>{value.telefono}</span>
        </button>
        
        <button class="location" on:click={onClickUbicacion}>
            <i class="bi bi-geo-alt icon"></i>
            <span>Ver ubicación</span>
        </button>
        </div>
    </div>
</div>

<style>
.pharmacy-card {
    background: #e6e9eb;
    border-radius: 12px;
    padding: 16px;
    color: #000 !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    width: 100%;
    height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.pharmacy-card:hover {
    box-shadow: 5px 6px 20px var(--green-darker-50);
}

.card-header {
    margin-bottom: 12px;
    align-self: anchor-center;
}

.pharmacy-name {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
    color: var(--green-01);
    position: relative;
    display: inline-block;
    text-align: center;
}

.pharmacy-name::after {
    content: '';
    position: absolute;
    bottom: -5px;
    justify-self: anchor-center;
    left: 0;
    width: 50%;
    height: 2px;
    background-color:  var(--green-01);
    transition: width 0.3s ease;
}

.pharmacy-card:hover .pharmacy-name::after {
    width: 100%;
    border-color: solid 1px var(--green-light);
}

.card-body {
    flex-grow: 1;
    margin-bottom: 12px;
}

.address {
    font-size: 14px;
    margin: 0 0 8px 0;
    color: #000;
    line-height: 1.3;
}

.hours {
    font-size: 13px;
    margin: 0;
    color: #000;
    line-height: 1.3;
}

.card-footer {
    margin-top: auto;
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
}

.phone, .location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    padding: 6px 12px;
    border: 1px solid var(--green-04);
    border-radius: 20px;
    transition: all 0.3s ease;
    color: #000 !important;
    cursor: pointer;
}

.pharmacy-card:hover .phone,
.pharmacy-card:hover .location {
    color: red;
}

.location {
    font-size: 13px;
}
.phone:hover,
.location:hover{
    background-color: var(--green-03) !important;
    color: var(--green-light) !important;
}

.phone:hover > .icon,
.location:hover > .icon{
    color: var(--green-light);
}

.icon {
    width: 16px;
    height: 16px;
    color: var(--green-03);
}

/* Responsive: 2 cards per row on mobile */
@media (max-width: 640px) {
.pharmacy-card {
    max-width: calc(100% - 8px);
    /* min-width: 140px; */
    padding: 12px;
    /* min-height: 140px; */
    height: 100% !important;
}

.pharmacy-name {
    font-size: 16px;
}

.address {
    font-size: 12px;
}

.hours {
    font-size: 11px;
}

.phone {
    font-size: 11px;
}

.icon {
    width: 14px;
    height: 14px;
}
}



</style>