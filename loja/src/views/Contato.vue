<template>
<div class="contato">
     <h2>Contato</h2>
     <div class="row">
      <div class="col_texto">
  <form id="formulario">
            Nome:<br>
            <input type="text" placeholder="Digite seu nome" name="nome" required value=""><br><br>
            Email:<br>
            <input type="email" placeholder="Digite seu email" name="email" required value=""><br><br>
            Assunto:<br>
            
            <select>
            <option value="elogio">Elogio</option>
            <option value="sugestao">Sugestão</option>
            <option value="reclamacao">Reclamação</option>
            </select><br><br>
            Comentários:<br>
            <textarea name="mensagem" rows="10" cols="60" required value=""></textarea><br><br>

           <b-button class="button">Enviar</b-button>
      </form>
    
    

   
</div>     
</div>       
</div>
</template>

