<template>
  <!--<div class="home">-->
  <!--<img alt="Vue logo" src="../assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--</div>-->

  <div>
    <b-row>
      <b-col>
        <h1> Eu te convido para o 1º Festival de Dados.</h1>
        <h3> Maior #hackthon de monitoramento contra o #covid19 do Brasil !!!</h3>
      </b-col>

    </b-row>
    <b-row>
      <b-col md="3">

      </b-col>
      <b-col md="6">
        <b-embed
                type="iframe"
                aspect="16by9"
                v-bind:src="linkyt"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
        ></b-embed>
      </b-col>
      <b-col md="3">

      </b-col>

    </b-row>
    <b-row>
      <b-col>
        <h2> Inscreva-se</h2>
      </b-col>

    </b-row>
    <b-row>
      <b-col md="3">

      </b-col>
      <b-col md="6">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row>
            <b-col>
              <b-form-group
                      id="input-group-1"
                      align="left"
                      label="Seu e-mail"
                      label-for="input-1"
                      description="Fique tranquilo seus dados nunca serão compartilhados com ninguém."
              >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Digite seu email aqui"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group id="input-group-2"
                            align="left"
                            label="Numero do seu WhatsApp:"
                            label-for="input-2"
                            description="Usaremos seu WhatsApp para te colocar no grupo do festival.">
                <b-form-input
                        id="input-2"
                        v-model="form.tel"
                        required
                        placeholder="WhatsApp Aqui!"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group id="input-group-3"
                            align="left"
                            label="Nome completo"
                            label-for="input-3">
                <b-form-input
                        id="input-3"
                        v-model="form.name"
                        required
                        placeholder="Seu nome completo."
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>



          <b-row>
            <b-col>
              <b-form-group id="input-group-4"
                            label="Sua especialidade ou área de estudo. Vale tudo!"
                            label-for="input-4">
                <b-form-input
                        id="input-3"
                        v-model="form.especialidade"
                        required
                        placeholder="Eu sou bom em..."
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="me">Nunca programei!</b-form-checkbox>
                  <b-form-checkbox value="that">Já programaei!</b-form-checkbox>
                  <b-form-checkbox value="that">Não tenho computador, mas quer ajudar!</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>

            <b-col md="12"
            style="width: 100%;"
            align="center">
              <b-button type="submit" variant="success" size="lg">Enviar</b-button>
            </b-col>
            <!--<b-col md="6">-->
            <!--<b-button type="reset" variant="info">Apoiar</b-button>-->
            <!--</b-col>-->

          </b-row>

        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>
      <b-col md="3">

      </b-col>


    </b-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    data() {
      return {
        linkyt:"https://www.youtube.com/embed/TZk6_9Yf1pA",
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
