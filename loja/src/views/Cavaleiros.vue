<template>
  <div class="cavaleiros">
    <h2>Cavaleiros</h2>
    <div class="row">
      <div class="col">
        
      </div>
    </div>

    <form> 
    <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="nome"
              placeholder="Digite o nome"
              v-model="cavaleiro.nome"
              >
          </div>
        
          <div class="form-group">
            <label for="Modelo">Modelo</label>
            <select class="form-control" id="modelo" v-model="cavaleiro.modelo">
              <option disabled value>Escolha o modelo</option>
              <option>EX</option>
              <option>Cloth Myth</option>
            </select>
          </div>


            <div class="form-group">
            <label for="imagem">Imagem</label>
            <input
              type="text"
              class="form-control"
              id="imagem"
              placeholder="Cole o Endereço da Imagem"
              v-model="cavaleiro.imagem"
              >
          </div>

          <div class="form-group">
          <button v-if="mudaBotao" @click="submitCavaleiro" type="button" class="btn btn-primary">
          Inserir Cavaleiro  
          </button>
          <button v-else type="button" @click="saveCavaleiro(cavaleiro)" class="btn btn-primary">
          Salvar  
          </button>
          </div>
        </form>
    
        
         <b-row class="cards">
           <b-card v-for="cavaleiro in getCavaleiros" v-bind:key="cavaleiro.id"
              :title="cavaleiro.nome"
              :img-src="cavaleiro.imagem"
              img-top
              tag="article"
              style="max-width: 16rem;"
              class="mb-3"
            >
              <b-card-text class="center">
                {{cavaleiro.modelo}}.
              </b-card-text>
              <b-button class="button"  @click="updateCavaleiro(cavaleiro.id)">Editar</b-button>
              <b-button class="button" @click="deleteCavaleiro(cavaleiro.id)">Excluir</b-button>

            </b-card>
         </b-row>
      
      
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'

 
export default{
  name: 'Cavaleiros',
	data(){
		return{
	cavaleiro:
      {id:'', nome:'', modelo: '', imagem:'' },
  
  mudaBotao:true
      
    }
    
  },

  methods: {
    ...mapActions(['add_cm','delete_cm','edit_cm']),
    submitCavaleiro(){
     this.add_cm(this.cavaleiro)
     this.cavaleiro={id:'', nome:'', modelo: '', imagem:'' }
    },

    deleteCavaleiro(id){
      this.delete_cm(id)
    },

    updateCavaleiro(id){
     this.cavaleiro=this.getCavaleirosById(id); 
     this.mudaBotao=false
    
  },

   saveCavaleiro(cavaleiro){
     this.edit_cm(cavaleiro);
     this.cavaleiro={id:'', nome:'', modelo: '', imagem:'' };
     this.mudaBotao=true
     
   }
   
   

  },

  

  computed:{
    ...mapGetters(['getCavaleiros', 'getCavaleirosById'])
  }
		
	

}
</script>
