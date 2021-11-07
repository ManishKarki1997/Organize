<template>
  <main>
    <Header />
    <div class="container content-wrapper">
      <n-table :single-line="false">
        <thead>
          <tr>
            <th>Label</th>
            <th>Folder Name</th>
            <th>Extensions</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, idx) in fileTypes" :key="idx + '-' + item.key">
            <td>
              <p v-if="editingItemRef?.name !== item.name">
                {{ item.name }}
              </p>

              <n-input
                v-if="editingItemRef?.name === item.name"
                v-model:value="item.name"
                placeholder="Label Name"
              />
            </td>
            <td>
              <p v-if="editingItemRef?.name !== item.name">
                {{ item.folderName }}
              </p>

              <n-input
                v-if="editingItemRef?.name === item.name"
                v-model:value="item.folderName"
                placeholder="Folder Name"
              />
            </td>
            <td>
              <n-dynamic-tags v-model:value="item.extensions" />
            </td>
            <td>
              <div
                v-if="editingItemRef?.name !== item.name"
                class="action-buttons-wrapper"
              >
                <n-button @click="setEditingItem(item)" text>
                  <template #icon>
                    <n-icon color="#2080F0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3l-362.7 362.6l-88.9 15.7l15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </n-icon>
                  </template>
                </n-button>

                <n-button @click="onClickDeleteItem(item)" text>
                  <template #icon>
                    <n-icon color="#ED5E60">
                      <trash />
                    </n-icon>
                  </template>
                </n-button>
              </div>

              <div
                v-if="editingItemRef?.name === item.name"
                class="action-buttons-wrapper"
              >
                <n-button @click="onConfirmItemEdit" text>
                  <template #icon>
                    <n-icon color="#2080F0">
                      <checkmark />
                    </n-icon>
                  </template>
                </n-button>
                <n-button @click="closeEditingMode" text>
                  <template #icon>
                    <n-icon color="#ED5E60">
                      <close />
                    </n-icon>
                  </template>
                </n-button>
              </div>
            </td>
          </tr>

          <!-- form input to add new item -->
          <tr>
            <td>
              <n-input
                v-model:value="newLabelItem.name"
                placeholder="Label Name"
              />
            </td>
            <td>
              <n-input
                v-model:value="newLabelItem.folderName"
                placeholder="Folder Name"
              />
            </td>
            <td>
              <n-dynamic-tags v-model:value="newLabelItem.extensions" />
            </td>
            <td>
              <n-button @click="onClickAddNewItem" text>
                <template #icon>
                  <n-icon color="#2080F0">
                    <add />
                  </n-icon>
                </template>
              </n-button>
            </td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import {
  NTable,
  NIcon,
  NInput,
  NButton,
  NDynamicTags,
  useMessage,
} from "naive-ui";
import Header from "@/components/Header.vue";
import { fileTypes } from "@/composables/useSettings";
import { Trash, Add, Checkmark, Close } from "@vicons/ionicons5";

export default {
  components: {
    Header,
    NTable,
    NInput,
    NButton,
    NDynamicTags,
    NIcon,
    Trash,
    Add,
    Checkmark,
    Close,
  },
  setup() {
    const message = useMessage();

    const editingItemRef = ref(null);
    const originalEditingItemData = ref(null);

    const newLabelItem = ref({
      name: "",
      folderName: "",
      extensions: [],
    });

    const setEditingItem = (item) => {
      editingItemRef.value = item;
      originalEditingItemData.value = item;
    };

    const isExtensionPresentElsewhere = (isForEditingItem) => {
      let extensionsArr = [];
      if (isForEditingItem) {
        extensionsArr = Object.values(editingItemRef.value.extensions);
      } else {
        extensionsArr = Object.values(newLabelItem.value.extensions);
      }

      const payload = [];

      for (let i = 0; i < extensionsArr.length; i++) {
        const found = fileTypes.value.map((t) => {
          if (Object.values(t.extensions).includes(extensionsArr[i])) {
            return {
              ...t,
              ext: extensionsArr[i],
            };
          }
        });
        if (found.length) {
          found.filter((x) => x).forEach((x) => payload.push(x));
        }
      }
      return payload;
    };

    const clearNewItemObj = () => {
      newLabelItem.value = {
        name: "",
        folderName: "",
        extensions: [],
      };
    };

    const closeEditingMode = () => {
      editingItemRef.value = null;
      originalEditingItemData.value = null;
    };

    const isValidInformation = (isForEditingItem) => {
      const refToCheckIn = ref(null);

      if (isForEditingItem) {
        refToCheckIn.value = editingItemRef.value;
      } else {
        refToCheckIn.value = newLabelItem.value;
      }

      if (refToCheckIn.value.name.trim() === "") {
        message.error("Please provide a label name");
        return false;
      }

      if (
        refToCheckIn.value.folderName.trim() !== "" &&
        fileTypes.value.find(
          (t) =>
            t.name !== originalEditingItemData.value.name &&
            t.folderName === refToCheckIn.value.folderName.trim()
        )
      ) {
        // made sure above that the folder name is not equal to the currently editing item's folder name
        // need not bother if thats the case, because there's gonna be the folder name collision with itself anyways
        message.error("This folder name already exists");
        return false;
      }

      if (refToCheckIn.value.extensions.length === 0) {
        message.error("Please provide at least one extension");
        return false;
      }

      const duplicateExtensionInfo =
        isExtensionPresentElsewhere(isForEditingItem);

      if (duplicateExtensionInfo.length) {
        if (isForEditingItem) {
          return true;
        }

        duplicateExtensionInfo.forEach((element) => {
          message.error(
            `The extension ${element.ext} is already present in the item ${element.name}`
          );

          newLabelItem.value.extensions = newLabelItem.value.extensions.filter(
            (x) => x !== element?.ext
          );
        });
        return false;
      }

      return true;
    };

    const onClickAddNewItem = () => {
      const isValid = isValidInformation();
      if (!isValid) return;

      const newItem = {
        name: newLabelItem.value.name,
        folderName:
          newLabelItem.value.folderName || `Y_${newLabelItem.value.name}`,
        extensions: newLabelItem.value.extensions,
      };

      fileTypes.value.push(newItem);
      clearNewItemObj();
    };

    const onClickDeleteItem = (item) => {
      fileTypes.value = fileTypes.value.filter((t) => t.name !== item.name);
    };

    const onConfirmItemEdit = () => {
      const isValid = isValidInformation(true);

      if (!isValid) return;
      if (editingItemRef.value.folderName.trim() === "") {
        editingItemRef.value.folderName = `Y_${editingItemRef.value.name}`;
      }

      editingItemRef.value.key = Date.now().toString();

      fileTypes.value = fileTypes.value.map((t) =>
        t.name === originalEditingItemData.value.name ? editingItemRef.value : t
      );

      closeEditingMode();
    };

    return {
      fileTypes,
      newLabelItem,
      onClickAddNewItem,
      onClickDeleteItem,
      editingItemRef,
      setEditingItem,
      onConfirmItemEdit,
      closeEditingMode,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  padding-top: 4rem;

  .action-buttons-wrapper {
    & > * {
      margin-right: 12px;
    }
  }
}
</style>
