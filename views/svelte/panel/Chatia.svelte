<script>

  let textarea, chats = [];

  function time(){
    return (new Date()+'').substring(16,24);
  }

  function send(){
    this.setAttribute('disabled',true);
    chats = chats.concat({msg:textarea, time:time()});
    api.chatia('test','msg excelente').then( respuesta => {
      this.removeAttribute('disabled');
      chats = chats.concat({msg:respuesta, time:time(), nova:true});
    });
  }
	
</script>
   
<style>

.chatcontainer {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

.darker {
  border-color: #ccc;
  background-color: #ddd;
}

.chatcontainer::after {
  content: "";
  clear: both;
  display: table;
}

.chatcontainer span {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.chatcontainer span.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

.time-right {
  float: right;
  color: #aaa;
}

.time-left {
  float: left;
  color: #999;
}

textarea {
  width: 100%;
  border:1px solid;
  color:blue;
  background:#cadbed;
}

</style>

<section class="container">
  <br>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">

      <h2>Chat-ia</h2>

      <div class="chatcontainer">
        <span>🪁</span>
        <p>Hola. Cómo puedo ayudarte?</p>
        <span class="time-right">{time()}</span>
      </div>
      
      {#each chats as chat}        
        {#if chat.nova}
          <div class="chatcontainer">
            <span>🪁</span>
            <p>{chat.msg}</p>
            <span class="time-right">{chat.time}</span>
          </div>
        {:else}
          <div class="chatcontainer darker">
            <span class="right">👤</span>
            <p>{chat.msg}</p>
            <span class="time-left">{chat.time}</span>
          </div>
        {/if}
      {/each}

      <div class="chatcontainer darker" style="background:#cadbed">
        <textarea bind:value={textarea}></textarea>
        <span class="time-left"><button on:click={send} class="btn btn-primary">Enviar</button></span>
      </div>
      
    </div>
    <div class="col-2"></div>
  </div>


</section>

