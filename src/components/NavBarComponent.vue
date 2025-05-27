<template>
    <nav class="justify-between">
        <ul class="flex bg-gray-900 justify-center fixed w-full top-0 left-0">
            <li class="text-white p-4 hover:bg-gray-700">
                <router-link to="/" class="p-3">Home</router-link>
            </li>
            <li class="text-white p-4 hover:bg-gray-700">
                <router-link to="/sobre" class="p-3">Sobre</router-link>
            </li>
            <li class="text-white p-4 hover:bg-gray-700">
                <router-link to="/contato" class="p-3">Contato</router-link>
            </li>
        </ul>
    </nav>
</template>