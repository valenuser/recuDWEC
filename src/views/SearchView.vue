<template>
    <section class=" w-[100%] h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center" style="background-image: url('https://images.gestionaweb.cat/2486/img-1280-720/architecture-gf0426e69e-1920-1765123.jpg')">
        <div class=" w-[80%] h-[90vh] flex flex-col overflow-hidden justify-start">
                <div class="w-[93.5%] flex items-center justify-between">
                    <img src="https://oridhean.com/Consorcios/llave.gif" alt="" class="w-[120px] h-[120px] ml-40">
                    <div class="w-[300px] flex bg-[#00233B] p-2 flex items-center justify-center">
                        <p class="text-white">Quieres salir?</p>
                        <p class="text-red-600 underline ml-2 font-bold cursor-pointer" @click="inicio">Cerrar sesion</p>
                    </div>
                </div>
                <div class="w-[95%] flex flex-wrap justify-around">
                    <div v-for="data in inmuebles" :key="data.id">
                        <div class="bg-white w-[610px] h-[300px] flex m-5 shadow-2xl">
                            <img :src="data.fotoPortada" alt="" class="w-[320px]">
                            <div class="flex flex-col ml-2 justify-around items-start">
                                <h1 class="font-bold text-[18px]">{{ data.ubicacion }}</h1>
                                <p class="text-[13px] font-bold">Nº de habitaciones: {{ data.caracteristicas.habitaciones }}</p>
                                <p class="text-[13px] font-bold">Nº de baños: {{ data.caracteristicas.baños }}</p>
                                <p class="text-[13px] font-bold">Area:  {{ data.caracteristicas.area }}</p>
                                <div class="flex justify-between items-end w-[230px]">
                                    <p class="text-[13px] font-bold">Venta: {{ data.precioVenta }}€</p> |
                                    <p class="text-[13px] font-bold">Alquiler: {{ data.precioAlquiler }}€</p>
                                </div>
                                <button class="bg-red-500 text-white font-bold p-2 rounded text-[10px] w-[120px] shadow-xl" @click="reserva(data.id)">Solicitar reserva</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[100%] h-[90px]  flex items-end justify-end">
                    <div class="w-[800px] flex justify-around text-[18px] underline text-white">
                        <p>Términos y condiciones</p>
                        <p>Politica de privacidad</p>
                    </div>
                </div>
            </div>
                
    </section>
</template>
<script>
import { mapState } from 'vuex';
export default{
    methods:{
        register(){
            this.$router.push({name:'registrarse'})
        },
        reserva(id){
            this.$router.push({name:'reserva',params:{id:id}})
        },
        inicio(){
            this.$router.push({name:'home'})
        }
    },
    computed:{
        ...mapState(['inmuebles'])
    }
}
</script>