<template>
    <section class="relative w-[100%] h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center overflow-hidden" style="background-image: url('https://images.gestionaweb.cat/2486/img-1280-720/architecture-gf0426e69e-1920-1765123.jpg')">
        <div class="hidden xl:flex lg:absolute top-[400px] -right-[150px] w-[900px] h-[900px] bg-gradient-to-b from-[#00233B] via-[#EA281C] to-[#EA281C] rounded-full z-0"></div>
        <div class=" w-[80%] h-[85vh] flex flex-col overflow-hidden justify-start z-10">
                <div class="w-[100%]  xl:w-[35%] flex items-center justify-center">
                    <img src="https://oridhean.com/Consorcios/llave.gif" alt="" class="w-[120px] h-[120px]">
                </div>
                <div class="flex items-center justify-around w-[100%] h-[60vh]">
                    <div class="bg-[#00233B] w-[400px] h-[500px] rounded-xl flex flex-col items-center justify-around">
                        <h1 class="text-[#B1D9F5] font-bold text-[25px]">SOLICITAR RESERVA</h1>
                        <div class="flex flex-col justify-around h-[300px]">
                            <input type="text" placeholder="Nombre de usuario" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="username">
                            <input type="email" placeholder="Correo electrónico" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="correo">
                            <input type="date" placeholder="Contraseña" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="fecha">
                            <div class="flex">
                                <input type="checkbox" name="" id="" @click="autorrellenar">
                                <label for="" class="text-white ml-3">Autorrellenar información</label>
                            </div>
                        </div>
                        <button class="bg-red-500 p-2 w-[160px] text-white font-bold rounded" @click="reservar">Reservar</button>
                        <div class="flex">
                            <p class="text-white">Quieres buscar otro piso?</p>
                            <p class="text-red-600 ml-1 underline decoration-2 cursor-pointer" @click="buscar">Volver</p>
                        </div>
                    </div>
                    <div class="w-[60%] h-[100vh]  hidden xl:flex items-center justify-center">
                        <div class="w-[800px] h-[500px] rounded-xl bg-white flex  justify-around  overflow-hidden">
                            <img :src="inmueble.fotoPortada" alt="" class="w-[420px]">
                            <div class="flex flex-col ml-2 justify-around items-start h-[400px]">
                                <h1 class="font-bold text-[22px]">{{ inmueble.ubicacion }}</h1>
                                <p class="text-[15px] font-bold">Nº de habitaciones: {{ caracteristicas.habitaciones }}</p>
                                <p class="text-[15px] font-bold">Nº de baños: {{ caracteristicas.baños }}</p>
                                <p class="text-[15px] font-bold">Area:  {{ caracteristicas.area  }}</p>
                                <div class="flex justify-between items-end w-[270px]">
                                    <p class="text-[15px] font-bold">Venta: {{ inmueble.precioVenta }}€</p> |
                                    <p class="text-[15px] font-bold">Alquiler: {{ inmueble.precioAlquiler }}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[100%] h-[90px]  flex xl:items-end xl:justify-end  justify-center z-10">
                    <div class="w-[400px]    xl:w-[800px] flex justify-around text-[15px] underline text-white z-10 xl:text-[18px]">
                        <p>Términos y condiciones</p>
                        <p>Política de privacidad</p>
                    </div>
                </div>
            </div>
                
    </section>
</template>
<script>
import { useToast } from "vue-toastification";
import Swal from 'sweetalert2'
import { mapState, mapMutations } from 'vuex';
export default{
    mounted(){
        this.dataInmueble()
    },
    data(){
        return{
            username:'',
            correo:'',
            fecha:'',
            inmueble:'',
            caracteristicas:'',
            fechasOcupadas:'',
            autorrelleno: false,
            Toast:useToast()
        }
    },
    methods:{
        ...mapMutations(['ADD_RESERVE']),
        buscar(){
            this.$router.push({name:'buscar'})
        },
        reservar(){
            if(this.username == '' || this.correo == '' || this.fecha == ''){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Rellene el formulario correctamente",
                    showConfirmButton: false,
                    timer: 1500
                    });

                    this.username = ''
                    this.correo = ''
                    this.fecha = ''
            }else{
                const verify = this.fechasOcupadas.find(el => el == this.fecha)
                console.log(verify);
                if(verify == undefined){
                    const data = {
                        id:this.$route.params.id,
                        date:this.fecha
                    }
                    this.ADD_RESERVE(data)
                    this.Toast.success("Fecha reservada con éxito!", {
                        position: "bottom-center",
                        timeout: 5000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                    this.dataInmueble()
                }else{
                    this.Toast.error("La fecha introducida ya ha sido reservada.", {
                        position: "bottom-center",
                        timeout: 5000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                }
            }
        },
        autorrellenar(){
            if(this.autorrelleno == false){
                this.username = this.user.username
                this.correo = this.user.correo

                this.autorrelleno = true
            }else{
                this.username = ''
                this.correo = ''

                this.autorrelleno = false
            }
        },
        dataInmueble(){
                this.inmueble = this.inmuebles.find(el => el.id == this.$route.params.id ),
                this.caracteristicas= this.inmueble.caracteristicas, 
                this.fechasOcupadas =this.inmueble.fechasOcupadas
            }
    },
    computed:{
        ...mapState(['inmuebles','user'])
    }
}
</script>