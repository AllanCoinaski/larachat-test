<template>
  <aside class="chat-aside"> <!--alterar a cor via banco de dados ou em um arquivo.txt ou no próprio css p/ n gerar requisição. Psso colocar um bg-grey na class ou um style com backgroud. Atualmente esta sem cor--> 
    <div class="px-2 lg:py-2">
      <img

        class="w-24 lg:w-full mx-auto"
        src="/images/logo.png"
      />
    </div>


    <nav class="nav-tab">
      <router-link :to="{ name: 'home' }">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="-5 0 35 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          ></path>
        </svg>
      </router-link>
      <router-link :to="{ name: 'favorites' }">  <!--view box é o tamanho-->
        <svg
          class="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"   
          fill="none"
          viewBox="-5 0 35 35"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </router-link>

      <router-link :to="{ name: 'profile' }"> <!--Chama a tela profiles -->
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="-5 0 35 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </router-link>




      <router-link :to="{ name: 'profile' }"> <!--Chama a tela profiles -->
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="-5 0 35 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      </router-link>
    </nav>
    <div class="text-center hidden lg:block"></div>
  </aside>
</template>

<script>
export default {};
</script>
