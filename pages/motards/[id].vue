<template>
  <div class="">
    <div>
      <div
        class="relative bg-gray-900 bg-gradient-to-t from-gray-700 to-gray-900 w-full py-[90px]"
      >
        <div
          class="absolute border-white border-8 left-1/2 -bottom-8 -translate-x-1/2 rounded-full overflow-hidden"
        >
          <img
            v-if="motard.image_profile !== null"
            class="w-20 h-20 object-cover"
            :alt="motard.nom_complet"
            :src="config.public.apiBase + '/assets/' + motard.image_profile"
          />
          <img
            v-else
            class="w-16 h-16 rounded-full object-cover"
            src="https://placehold.co/400x400"
            alt="img_alt"
          />
        </div>
      </div>
    </div>

    <div class="p-container mt-54">
      <div class="text-center">
        <h1 class="text-xl font-bold mt-12 text-center">{{ motard.nom_complet }}</h1>
        <p
          class="w-auto mt-4 line-clamp-1 p-1 px-8 rounded-md text-gray-300 font-medium bg-gray-700"
        >
          <span class="font-semibold text-gray-50"> ID : </span>
          {{ motard.id }}
        </p>
      </div>

      <div class="mt-8">
        <div class="border border-gray-100 rounded-xl">
          <Disclosure>
            <DisclosureButton
              class="px-8 py-4 bg-gray-100 text-center w-full border-b-2 border-gray-200"
            >
              <span class="text-lg font-bold"> Afficher le code QR </span>
            </DisclosureButton>
            <div>
              <DisclosurePanel class="text-gray-500">
                <div class="py-8 bg-gray-100 w-full flex justify-center items-center">
                  <qrcode-vue
                    :value="motard.id"
                    :size="300"
                    level="H"
                    foreground="#111827"
                  />
                </div>
              </DisclosurePanel>
            </div>
          </Disclosure>
        </div>
      </div>
      <div class="mt-8 pb-[90px]">
        <div class="flex justify-between">
          <div class="w-full">
            <label class="custom-field one w-full">
              <input disabled v-model="motard.nom_complet" type="text" placeholder=" " />
              <span class="placeholder">Nom complet (Nom - Postnom - Prénom)</span>
            </label>
            <label class="custom-field one w-full">
              <input disabled v-model="motard.sexe" type="text" placeholder=" " />
              <span class="placeholder">Sexe</span>
            </label>
            <label class="custom-field one w-full">
              <input
                disabled
                v-model="motard.date_de_naissance"
                type="text"
                placeholder=" "
              />
              <span class="placeholder">Date de naissance</span>
            </label>

            <label class="custom-field one w-full">
              <input
                disabled
                v-model="motard.lieu_de_naissance"
                type="text"
                placeholder=" "
              />
              <span class="placeholder">Lieu de naissance</span>
            </label>

            <label class="custom-field one w-full">
              <input disabled v-model="motard.eta_civil" type="text" placeholder=" " />
              <span class="placeholder">État-civil</span>
            </label>

            <label class="custom-field one w-full">
              <input disabled v-model="motard.nationalite" type="text" placeholder=" " />
              <span class="placeholder">Nationalité</span>
            </label>

            <label class="custom-field one w-full">
              <input
                disabled
                v-model="motard.n_carte_d_electeur"
                type="text"
                placeholder=" "
              />
              <span class="placeholder">Numéro Carte d'électeur</span>
            </label>

            <label class="custom-field one w-full">
              <input disabled v-model="motard.email" type="text" placeholder=" " />
              <span class="placeholder">Adresse e-mail</span>
            </label>

            <label class="custom-field one w-full">
              <input disabled v-model="motard.telephone" type="text" placeholder=" " />
              <span class="placeholder">Téléphone</span>
            </label>

            <div class="">
              <h2 class="text-center text-md font-bold mt-8 mb-4">
                Image carte d'électeur
              </h2>
              <img
                v-if="motard.image_carte_d_electeur !== null"
                class="w-full h-52 object-cover rounded-xl mt-4"
                :alt="motard.nom_complet"
                :src="config.public.apiBase + '/assets/' + motard.image_carte_d_electeur"
              />
              <img
                v-else
                class="w-full h-52 object-cover"
                src="https://placehold.co/100x100"
                alt="img_alt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import QrcodeVue from "qrcode.vue";

import { useGlobalStore } from "~~/store/global";

const route = useRoute();
const config = useRuntimeConfig();

const { getItemById } = useDirectusItems();

const [
  { data: motard, pending: motard_p, error: motard_e, refresh: motard_r },
] = await Promise.all([
  useAsyncData("single-motard", () =>
    getItemById({
      collection: "data_collection",
      id: route.params.id,
    })
  ),
]);

onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Infos d'un motard";
  useGlobalStore().$state.isBackBtn = true;
  useGlobalStore().$state.isMenuVisible = true;
});

console.log(motard.value);
</script>

<style lang="scss" scoped>
label input {
  @apply font-medium;
}

label .placeholder {
  @apply font-normal;
}
</style>
