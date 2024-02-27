<template>
    <section class=" w-[100%] h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center" style="background-image: url('https://images.gestionaweb.cat/2486/img-1280-720/architecture-gf0426e69e-1920-1765123.jpg')">
        <div class=" w-[80%] h-[85vh] flex flex-col overflow-hidden justify-start">
                <div class="w-[35%] flex items-center justify-center">
                    <img src="https://oridhean.com/Consorcios/llave.gif" alt="" class="w-[120px] h-[120px]">
                </div>
                <div class="flex items-center justify-around w-[100%] h-[60vh]">
                    <div class="bg-[#00233B] w-[400px] h-[500px] rounded-xl flex flex-col items-center justify-around">
                        <h1 class="text-[#B1D9F5] font-bold text-[25px]">SOLICITAR RESERVA</h1>
                        <div class="flex flex-col justify-around h-[300px]">
                            <input type="text" placeholder="Nombre de usuario" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold">
                            <input type="email" placeholder="Correo electrónico" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold">
                            <input type="date" placeholder="Contraseña" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold">
                        </div>
                        <button class="bg-red-500 p-2 w-[160px] text-white font-bold rounded">Crear cuenta</button>
                        <div class="flex">
                            <p class="text-white">Quieres buscar otro piso?</p>
                            <p class="text-red-600 ml-1 underline decoration-2 cursor-pointer" @click="buscar">Volver</p>
                        </div>
                    </div>
                    <div class="w-[60%] h-[100vh]  flex items-center justify-center">
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
                <div class="w-[100%] h-[90px]  flex items-end justify-end">
                    <div class="w-[800px] flex justify-around text-[18px] underline text-white">
                        <p>Términos y condiciones</p>
                        <p>Términos y condiciones</p>
                    </div>
                </div>
            </div>
                
    </section>
</template>
<script>
import { mapState } from 'vuex';
export default{
    mounted(){
        this.inmueble = this.inmuebles.find(el => el.id == this.$route.params.id )
        this.caracteristicas = this.inmueble.caracteristicas
    },
    data(){
        return{
            inmueble:'',
            caracteristicas:''
        }
    },
    methods:{
        buscar(){
            this.$router.push({name:'buscar'})
        }
    },
    computed:{
        ...mapState(['inmuebles'])
    }
}
</script>