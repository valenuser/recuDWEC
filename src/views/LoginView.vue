<template>
    <section class="relative w-[100%] h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center overflow-hidden" style="background-image: url('https://images.gestionaweb.cat/2486/img-1280-720/architecture-gf0426e69e-1920-1765123.jpg')">
        <div class=" hidden lg:flex lg:absolute top-[400px] -right-[150px] w-[900px] h-[900px] bg-gradient-to-b from-[#00233B] via-[#EA281C] to-[#EA281C] rounded-full z-0 "></div>
        <div class=" w-[80%] h-[85vh] flex flex-col overflow-hidden justify-start z-10">
                <div class=" w-[100%]  lg:w-[35%] flex items-center justify-center">
                    <img src="https://oridhean.com/Consorcios/llave.gif" alt="" class="w-[120px] h-[120px]">
                </div>
                <div class="flex items-center justify-around w-[100%] h-[60vh] ">
                    <div class="bg-[#00233B] w-[400px] h-[500px] rounded-xl flex flex-col items-center justify-around">
                        <h1 class="text-[#B1D9F5] font-bold text-[25px]">ACCEDER</h1>
                        <div class="flex flex-col justify-around h-[200px]">
                            <input type="email" placeholder="Correo electrónico" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="correo">
                            <input type="password" placeholder="Contraseña" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="password">
                        </div>
                        <button class="bg-red-500 p-3 w-[130px] text-white font-bold rounded" @click="login">Acceder</button>
                        <div class="flex">
                            <p class="text-white">No tienes cuenta?</p>
                            <p class="text-red-600 ml-1 underline decoration-2 cursor-pointer" @click="register" >Crear cuenta</p>
                        </div>
                    </div>
                    <div class="w-[60%] h-[100vh] hidden lg:flex items-center justify-center">
                        <div class="w-[800px] h-[500px] rounded-xl bg-white flex flex-col justify-around p-8 overflow-hidden ">
                            <h1 class="font-bold text-[50px]">Somos Golden Key Immobiliaria</h1>
                            <p class="text-justify"><span class="text-red-600 font-bold">Golden Key Inmobiliaria</span> es tu socio confiable en el mercado inmobiliario. Nuestro compromiso es proporcionar un servicio excepcional, centrado en tus necesidades. Con transparencia y atención personalizada, te ayudamos a encontrar la propiedad perfecta. Ya sea que busques tu hogar ideal o una inversión rentable, estamos aquí para hacer realidad tus sueños inmobiliarios. Confía en Golden Key Inmobiliaria para una experiencia inmobiliaria sin igual.</p>
                            <div class="w-[100%] h-[90px]  flex items-end justify-center">
                                <div class="w-[200px] flex justify-around text-[25px] ">
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-square-facebook"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[100%] h-[90px]  flex lg:items-end lg:justify-end  justify-center z-10">
                            <div class="w-[400px] lg:w-[800px] flex justify-around text-[15px] underline text-white z-10 lg:text-[18px]">
                                <p>Términos y condiciones</p>
                                <p>Política de privacidad</p>
                            </div>
                        </div>
            </div>
                
    </section>
</template>
<script>
import Swal from 'sweetalert2'
import { mapState,mapMutations } from 'vuex';
export default{
    data(){
        return{
            correo:'',
            password:''
        }
    },
    methods:{
        ...mapMutations(['LOGIN_USER']),
        register(){
            this.$router.push({name:'registrarse'})
        },
        login(){
            if(this.correo.includes(' ') || this.correo == ''  || this.password.includes(' ') || this.password == ''){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Rellene el formulario correctamente",
                    showConfirmButton: false,
                    timer: 1500
                    });

                    this.correo = ''
                    this.password = ''
            }else{

                const user = this.users.find(el => el.correo == this.correo && el.password == this.password)
    
                if(user != undefined){
                    this.LOGIN_USER(user)
                    this.$router.push({name:'buscar'})
                }else{
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Usuario no encontrado.",
                        showConfirmButton: false,
                        timer: 1500
                        });
    
                    this.correo = ''
                    this.password = ''
                }
            }
        }
    },
    computed:{
        ...mapState(['users'])
    }
}
</script>