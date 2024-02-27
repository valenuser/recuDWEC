<template>
    <section class="relative w-[100%] 2xl:h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center lg:overflow-hidden" style="background-image: url('https://images.gestionaweb.cat/2486/img-1280-720/architecture-gf0426e69e-1920-1765123.jpg')">
        <div class="hidden  2xl:flex 2xl:absolute top-[400px] -right-[150px] w-[900px] h-[900px] bg-gradient-to-b from-[#00233B] via-[#EA281C] to-[#EA281C] rounded-full z-0"></div>
        <div class=" w-[80%] 2xl:h-[90vh] flex flex-col overflow-hidden justify-start z-10">
                <div class=" w-[100%]  lg:w-[92.5%] flex items-center justify-between">
                    <img src="https://oridhean.com/Consorcios/llave.gif" alt="" class="w-[120px] h-[120px] lg:ml-40">
                    <div class=" w-[300px] flex bg-[#00233B] p-2 flex items-center justify-center text-[10px] lg:text-[20px]">
                        <p class="text-white">Quieres salir?</p>
                        <p class="text-red-600 underline ml-2 font-bold cursor-pointer" @click="inicio">Cerrar sesion</p>
                    </div>
                </div>
                <div class="w-[95%] h-[200vh] flex flex-wrap justify-around snap-y">
                    <div v-for="data in inmuebles" :key="data.id">
                        <div class="bg-white xl:w-[580px] xl:h-[250px] md:w-[610px] md:h-[400px]   flex m-5 shadow-2xl">
                            <img :src="data.fotoPortada" alt="" class="w-[320px] hidden lg:flex">
                            <div class="flex flex-col ml-2 justify-around items-start snap-center p-3">
                                <h1 class="font-bold  md:text  lg:text-[18px]">{{ data.ubicacion }}</h1>
                                <p class=" md:text  lg:text-[13px] font-bold">Nº de habitaciones: {{ data.caracteristicas.habitaciones }}</p>
                                <p class=" md:text  lg:text-[13px] font-bold">Nº de baños: {{ data.caracteristicas.baños }}</p>
                                <p class=" md:text  lg:text-[13px] font-bold">Area:  {{ data.caracteristicas.area }}</p>
                                <div class="flex justify-between items-end w-[230px]">
                                    <p class=" md:text  lg:text-[13px] font-bold">Venta: {{ data.precioVenta }}€</p> |
                                    <p class=" md:text  lg:text-[13px] font-bold">Alquiler: {{ data.precioAlquiler }}€</p>
                                </div>
                                <button class="bg-red-500 text-white font-bold p-2 rounded text-[10px] w-[120px] shadow-xl" @click="reserva(data.id)">Solicitar reserva</button>
                            </div>
                        </div>
                    </div>
                    <div class="w-[100%] h-[90px]  flex 2xl:items-end 2xl:justify-end  justify-center z-10">
                        <div class="w-[400px] 2xl:w-[800px] flex justify-around text-[15px] underline text-white z-10 2xl:text-[18px]">
                            <p>Términos y condiciones</p>
                            <p>Política de privacidad</p>
                        </div>
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