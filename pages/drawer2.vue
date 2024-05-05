<template>
    <v-card class="mx-auto fill-height" color="grey-lighten-3" max-width="auto">
      <v-layout>
        <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
        >
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(4, 145, 187, 0.78), rgba(39, 163, 245, 0.8)"
            ></v-img>
          </template>
  
          <template v-slot:prepend>
            <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"/> -->
            <v-btn color="white" icon="lets-icons:menu" @click.stop="drawer = !drawer"></v-btn>
          </template>
         
          <v-app-bar-title class="text-h5" >Alvato</v-app-bar-title>
  
          <v-spacer></v-spacer>
  
          <template v-if="mdAndUp">
            <v-btn icon>
                <v-tooltip activator="parent" location="bottom">Signin</v-tooltip>
                <v-icon>mdi:home</v-icon>
            </v-btn>
          </template>

  
          <v-btn icon>
            <v-tooltip activator="parent" location="bottom">Signup</v-tooltip>
            <v-icon>uil:signout</v-icon>
          </v-btn>
  
          <v-btn rounded="lg">
            <!-- <v-icon>mdi:dots-vertical</v-icon> -->
            <v-avatar image="https://randomuser.me/api/portraits/men/85.jpg"></v-avatar>
          </v-btn>
          
          
        </v-app-bar>
  
        <v-navigation-drawer
        v-model="drawer"
        :location="mobile ? 'bottom' : undefined"
        expand-on-hover
        temporary
        >
        <v-list density="compact" nav>
            <div v-for="item,inx in items">
                <v-list-group
                v-if="item.children?.length"
                :title="item.title"
                :key="inx"
                :value="item.title"
                color="primary"
                rounded="shaped"
                expand-icon="mdi:menu-down"
                collapse-icon="mdi:menu-up"
                >
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            :prepend-icon="item.icon"
                            :title="item.title"
                            :value="item.title"
                        ></v-list-item>
                    </template>
                    <v-list-item
                        v-for="subItem,i in item.children"
                        :key="i"
                        :title="subItem.title"
                        :value="subItem.title"
                        :prepend-icon="subItem.icon"
                        color="primary"
                    >
                    </v-list-item>
                </v-list-group>

                <v-list-item
                v-else
                :title="item.title"
                :value="item.title"
                :prepend-icon="item.icon"
                color="primary"
                ></v-list-item>
            </div> 
        </v-list>



        </v-navigation-drawer>
        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="n in 4"
                :key="n"
                cols="12"
              >
                <v-card
                  :subtitle="`Subtitle for Content ${n}`"
                  :title="`Content ${n}`"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                ></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
     <!-- mdAndUp:{{ mdAndUp }} -->
  </template>

<script setup lang="ts">
    // import { createVuetify} from 'vuetify'

    import { useDisplay } from 'vuetify'
    import  { ref } from 'vue'

    import sideMenu from '../components/sideMenu'

    const { mobile, mdAndUp } = useDisplay()

    const drawer = ref(false)
    const rail = ref(false)

    const items = sideMenu

    console.log(mobile.value)

</script>