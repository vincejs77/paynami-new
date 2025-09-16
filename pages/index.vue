<template>
  <div class="p-container relative pb-[100px] pt-[90px]">
    <form
      action="data_collection"
      name="data_collection"
      enctype="multipart/form-data"
      method="post"
      class="space-y-0"
    >
      <div class="flex flex-col items-center justify-center">
        <div
          class="imagePreviewWrapper relative mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 bg-cover object-cover"
          :style="{ 'background-image': `url(${previewImage}) !important` }"
          @click="selectImage"
        >
          <svg
            v-if="previewImage == null"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-8 w-8 text-gray-500"
          >
            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
            <path
              fill-rule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <span
            class="absolute bottom-0 right-0 rounded-full bg-white p-2"
            v-if="previewImage !== null"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-gray-400"
            >
              <path
                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
              />
            </svg>
          </span>
        </div>
        <input
          ref="fileInput"
          hidden
          name="_image_profile"
          id="_image_profile"
          type="file"
          @input="pickFile"
          required
          accept="image/*"
        />

        <label class="text-lg font-semibold text-gray-700"> Profil</label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_nom_complet" type="text" placeholder=" " />
          <span class="placeholder">Nom complet (Nom - Postnom - Prénom)</span>
        </label>
      </div>

      <div>
        <label class="custom-field one relative w-full">
          <select v-model="_sexe">
            <option value="Selectionnez" selected disabled>Selectionnez</option>
            <option value="Féminin">Féminin</option>
            <option value="Masculin">Masculin</option>
          </select>
          <span class="absolute right-6 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span class="absolute -top-2 left-6 bg-white px-1 text-sm text-gray-500">
            Sexe
          </span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_date_de_naissance" type="date" placeholder="mm/dd/yyyy" />
          <span class="placeholder">Date de naissance</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_lieu_de_naissance" type="mail" placeholder=" " />
          <span class="placeholder">Lieu de naissance</span>
        </label>
      </div>

      <div>
        <label class="custom-field one relative w-full">
          <select v-model="_etat_civil">
            <option value="Selectionnez" selected disabled>Selectionnez</option>
            <option value="Célibataire">Célibataire</option>
            <option value="Marié">Marié</option>
            <option value="Autres">Autres</option>
          </select>
          <span class="absolute right-6 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span class="absolute -top-2 left-6 bg-white px-1 text-sm text-gray-500">
            État-civil
          </span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_nationalite" type="mail" placeholder=" " />
          <span class="placeholder">Nationalité</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_n_carte_d_electeur" type="mail" placeholder=" " />
          <span class="placeholder">No carte d’électeur</span>
        </label>
      </div>

      <div class="relative flex flex-col items-center justify-center pb-1 pt-4">
        <div
          class="imagePreviewWrapper relative mx-auto mb-0 flex h-44 w-full items-center justify-center rounded-xl bg-gray-200 bg-cover bg-center object-cover"
          :style="{ 'background-image': `url(${previewImage_ce}) !important` }"
          @click="selectImage_ce"
        >
          <svg
            v-if="previewImage_ce == null"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-8 w-8 text-gray-500"
          >
            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
            <path
              fill-rule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <span
            class="absolute bottom-0 right-0 rounded-full bg-white p-2"
            v-if="previewImage_ce !== null"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4 text-gray-400"
            >
              <path
                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
              />
            </svg>
          </span>
        </div>
        <input
          ref="fileInput_ce"
          hidden
          name="_image_carte_d_electeur"
          id="_image_carte_d_electeur"
          type="file"
          @input="pickFile_ce"
          required
          accept="image/*"
        />

        <label class="absolute left-5 top-2 bg-white px-2 text-sm text-gray-500">
          Poto de la carte d'electeur</label
        >
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_email" type="mail" placeholder=" " />
          <span class="placeholder">Adresse e-mail</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model.number="_telephone" type="tel" placeholder=" " />
          <span class="placeholder">Numéro de téléphone</span>
        </label>
      </div>

      <div class="pb-0 pt-4 text-center">
        <span class="text-lg font-semibold text-gray-700"> Adresse actuelle </span>
      </div>

      <div class="pt-2">
        <label class="custom-field one w-full">
          <input v-model="_adresse_physique" type="text" placeholder=" " />
          <span class="placeholder">Adresse (AV. - Q. - C.)</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_ville" type="text" placeholder=" " />
          <span class="placeholder">Ville</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_association" type="text" placeholder=" " />
          <span class="placeholder">Association</span>
        </label>
      </div>

      <div class="pb-0 pt-4 text-center">
        <span class="text-lg font-semibold text-gray-700">
          La moto et le proprietaire
        </span>
      </div>

      <div class="pt-2">
        <label class="custom-field one relative w-full">
          <select v-model="_usage_moto">
            <option value="0" selected disabled>Selectionnez</option>
            <option value="1">Personnel</option>
            <option value="2">Publique</option>
          </select>
          <span class="absolute right-6 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span class="absolute -top-2 left-6 bg-white px-1 text-sm text-gray-500">
            La moto est à usage
          </span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_plaque_immatriculation" type="text" placeholder=" " />
          <span class="placeholder">Plaque d'immatriculation</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_marque_moto" type="text" placeholder=" " />
          <span class="placeholder">Marque</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_modele_moto" type="text" placeholder=" " />
          <span class="placeholder">Modèle</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_asbl_affiliation" type="text" placeholder=" " />
          <span class="placeholder">Asbl d’affiliation</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_nom_propietaire" type="text" placeholder=" " />
          <span class="placeholder">Nom du propriétaire</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_adresse_propietaire" type="text" placeholder=" " />
          <span class="placeholder">Adresse du propriétaire</span>
        </label>
      </div>

      <div>
        <button
          @click="save_motard"
          type="button"
          class="btn-primay mt-6 w-full overflow-hidden shadow-lg shadow-gray-400"
        >
          <span v-if="!useGlobalStore().$state.isPending"> Valider et enregister </span>
          <span v-else class="w-r flex items-center justify-center">
            <svg
              class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span> Envoie en cours ... </span>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

const _image_profile = ref("");
const _nom_complet = ref("");
const _sexe = ref("");
const _date_de_naissance = ref(
  new Date("Jan 1, 1990 00:00:00").toISOString().slice(0, 10)
);
const _lieu_de_naissance = ref("");
const _etat_civil = ref("Selectionnez");
const _nationalite = ref("");
const _n_carte_d_electeur = ref("");
const _image_carte_d_electeur = ref("");
const _email = ref("");
const _telephone = ref("");

const _adresse_physique = ref("");
const _ville = ref("");
const _association = ref("");

const _usage_moto = ref(1);
const _plaque_immatriculation = ref("");
const _marque_moto = ref("");
const _modele_moto = ref("");
const _asbl_affiliation = ref("");
const _nom_propietaire = ref("");
const _adresse_propietaire = ref("");

onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Ajouter un mortard";
  useGlobalStore().$state.isBackBtn = true;
  useGlobalStore().$state.isMenuVisible = true;
});

const previewImage = ref();
const previewImage_ce = ref();

const fileInput = ref();
const fileInput_ce = ref();

const selectImage = () => {
  fileInput.value.click();
};

const selectImage_ce = () => {
  fileInput_ce.value.click();
};

const emit = defineEmits(["input"]);

//   @change="onChange_image_profile"
//   const onChange_image_profile = (e) => {
//   emit("update:_image_profile", e.target.files[0]);
// };

var formData = new FormData();

const pickFile = () => {
  let input = fileInput.value;
  let file = input.files;
  if (file && file[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file[0]);
    emit("input", file[0]);
    _image_profile.value = file[0];
  }

  console.log(_image_profile.value);
};

const pickFile_ce = () => {
  let input = fileInput_ce.value;
  let file = input.files;
  if (file && file[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      previewImage_ce.value = e.target.result;
    };
    reader.readAsDataURL(file[0]);
    emit("input_ce", file[0]);
    _image_carte_d_electeur.value = file[0];
  }

  console.log(_image_carte_d_electeur.value);
};

const { createItems } = useDirectusItems();
const router = useRouter();

useGlobalStore().$state.isPending = false;
const sentState = ref(false);
const errorIn = ref(false);

/*
DOCUMENTATION
https://hackernoon.com/how-to-upload-files-with-javascript?source=rss
*/

const save_motard = async () => {
  formData.append("_image_profile", _image_profile.value);
  Object.assign(_image_profile.value, {
    filename_download: _image_profile.value?.name,
    storage: "local",
  });
  Object.assign(_image_carte_d_electeur.value, {
    filename_download: _image_carte_d_electeur.value?.name,
    storage: "local",
  });
  const error = useError();

  try {
    var items = [
      {
        // image_profile: _image_profile.value,
        nom_complet: _nom_complet.value,
        sexe: _sexe.value,
        date_de_naissance: _date_de_naissance.value,
        lieu_de_naissance: _lieu_de_naissance.value,
        eta_civil: _etat_civil.value,
        nationalite: _nationalite.value,
        n_carte_d_electeur: _n_carte_d_electeur.value,
        // image_carte_d_electeur: _image_carte_d_electeur.value,
        email: _email.value,
        telephone: _telephone.value,
        adresse_physique: _adresse_physique.value,
        ville: _ville.value,
        association: _association.value,
        usage_moto: _usage_moto.value,
        plaque_immatriculation: _plaque_immatriculation.value,
        marque_moto: _marque_moto.value,
        modele_moto: _modele_moto.value,
        asbl_affiliation: _asbl_affiliation.value,
        nom_propietaire: _nom_propietaire.value,
        adresse_propietaire: _adresse_propietaire.value,
        saved: true,
      },
    ];

    useGlobalStore().$state.isPending = true;

    await createItems({
      collection: "data_collection",
      items,
    });

    useGlobalStore().$state.isPending = false;
    sentState.value = true;
    if (errorIn.value) {
      return 0;
    } else {
      router.push("/motards");
    }
  } catch (e) {
    console.log(e.message);
    errorIn.value = true;
    router.onError({});
  }
};
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #f3f4f6 inset !important;
}
</style>
