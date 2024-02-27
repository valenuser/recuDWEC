<template>
    <section class=" w-[100%] h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center" style="background-image: url('https://images.gestionaweb.cat/2486/img-1280-720/architecture-gf0426e69e-1920-1765123.jpg')">
        <div class=" w-[80%] h-[85vh] flex flex-col overflow-hidden justify-start">
                <div class="w-[35%] flex items-center justify-center">
                    <img src="https://oridhean.com/Consorcios/llave.gif" alt="" class="w-[120px] h-[120px]">
                </div>
                <div class="flex items-center justify-around w-[100%] h-[60vh]">
                    <div class="bg-[#00233B] w-[400px] h-[500px] rounded-xl flex flex-col items-center justify-around">
                        <h1 class="text-[#B1D9F5] font-bold text-[25px]">REGISTRARSE</h1>
                        <div class="flex flex-col justify-around h-[300px]">
                            <input type="text" placeholder="Nombre de usuario" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="username">
                            <input type="email" placeholder="Correo electrónico" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="correo">
                            <input type="password" placeholder="Contraseña" class="w-[300px] text-center p-3 rounded-xl border-4 border-[#57AEEC] outline-none placeholder:font-bold" v-model="password">
                        </div>
                        <button class="bg-red-500 p-2 w-[160px] text-white font-bold rounded" @click="registerUser">Crear cuenta</button>
                        <div class="flex">
                            <p class="text-white">Ya tienes cuenta?</p>
                            <p class="text-red-600 ml-1 underline decoration-2 cursor-pointer" @click="login">Iniciar sesión</p>
                        </div>
                    </div>
                    <div class="w-[60%] h-[100vh]  flex items-center justify-center">
                        <div class="w-[800px] h-[500px] rounded-xl bg-white flex flex-col justify-around p-8 ovweflow-hidden">
                            <h1 class="font-bold text-[50px]">Somos Golden Key Immobiliaria</h1>
                            <p class="text-justify"><span class="text-red-600 font-bold">Golden Key Inmobiliaria</span> es tu socio confiable en el mercado inmobiliario. Nuestro compromiso es proporcionar un servicio excepcional, centrado en tus necesidades. Con transparencia y atención personalizada, te ayudamos a encontrar la propiedad perfecta. Ya sea que busques tu hogar ideal o una inversión rentable, estamos aquí para hacer realidad tus sueños inmobiliarios. Confía en Golden Key Inmobiliaria para una experiencia inmobiliaria sin igual.</p>
                            <div class="w-[100%] h-[90px]  flex items-end justify-center">
                                <div class="w-[200px] flex justify-around text-[25px]">
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-square-facebook"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
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
                
    </section>
</template>
<script>
import Swal from 'sweetalert2'
import { mapMutations } from 'vuex';
export default{
    data(){
        return{
            username:'',
            correo:'',
            password:''
        }
    },
    methods:{
        ...mapMutations(['REGISTER_USER']),
        login(){
            this.$router.push({name:'home'})
        },
        registerUser(){
            const pastronEmail = /[@]/g
            const mayusculas = /[A-Z]/g
            const minusculas = /[a-z]/g
            const numeros = /[0-9]/g


            if( this.username == ''  || this.username.includes(' ')  || this.correo == '' || this.correo.includes(' ') || this.password == '' || this.password.includes(' ') ||this.username.length < 3 || this.username.length > 10 || this.correo.match(pastronEmail) == null || this.correo.includes('.') == false || this.password.match(mayusculas) == null || this.password.match(minusculas) == null || this.password.match(numeros) == null){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Los datos estan mal proporcionados.",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    this.password = ''
                    this.username = ''
                    this.correo = ''
            }else{
                const user = {
                    username:this.username,
                    password:this.password,
                    correo:this.correo
                }

                this.REGISTER_USER(user)

                this.$router.push({name:'home'})
            }
        }
    }
}
</script>