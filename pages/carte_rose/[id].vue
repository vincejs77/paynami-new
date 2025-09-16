<template>
  <div class="py-[100px] h-screen flex justify-center items-center">
    <div class="relative w-full">
      <img class="min-w-[400px]" src="/img/bg_carte_rose.png" alt="" />
      <div>
        <span class="absolute top-[107px] left-[140px] font-bold text-sm">
          {{ mortard_carte_rose.nom_complet }}
        </span>
        <span class="absolute top-[128px] left-[110px] font-bold text-sm">
          {{ mortard_carte_rose.adresse_physique }}
        </span>

        <span class="absolute top-[153px] left-[87px] font-bold text-sm">
          {{ mortard_carte_rose.n_carte_d_electeur }}
        </span>

        <span class="absolute top-[171px] left-[167px] font-bold text-sm">
          {{
            new Date(mortard_carte_rose.date_created).toLocaleDateString("fr", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
          }}
        </span>

        <span class="absolute top-[213px] left-[87px] font-bold text-sm">
          {{ mortard_carte_rose.plaque_immatriculation }}
        </span>

        <span class="absolute top-[234px] left-[112px] font-bold text-sm">
          {{
            new Date().toLocaleDateString("fr", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";
const route = useRoute();
const { getItemById } = useDirectusItems();

const [
  { data: mortard_carte_rose, pending: motard_p, error: motard_e, refresh: motard_r },
] = await Promise.all([
  useAsyncData("single-motard", () =>
    getItemById({
      collection: "data_collection",
      id: route.params.id,
    })
  ),
]);

console.log(mortard_carte_rose.value);

onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Carte Rose";
});
</script>
