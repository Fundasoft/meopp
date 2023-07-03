<script>

  let cards = []; 
	
	api('/cards/buscar').then( arr=>cards=arr );
	
</script>
 
<style>
	h2 {color:orange}
</style>
  
<div class="container mt-15">
  <div class="row">
    {#each cards as item}
    <div class="col" style="margin-bottom: 10px; border:solid">
        <h2>{item.title}</h2>
        <h5>{item.subtitle}</h5>
        <p>{item.description}</p>
    </div>
    {/each}
  </div>
</div>
