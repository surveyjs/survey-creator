<script lang="ts">
import { defineComponent } from "vue";
import { SurveyCreatorModel } from "survey-creator-core";

//window.survey = new SurveyModel(json);

export default defineComponent({
  name: "App",
  data() {
    const creator = new SurveyCreatorModel({
      showLogicTab: true,
      showTranslationTab: true,
      showThemeTab: true,
    });
    creator.JSON = {
      elements: [
        {
          name: "username",
          type: "text",
          title: "Username",
          maxLength: 25,
        },
        {
          name: "email",
          type: "text",
          title: "E-mail address",
          placeholder: "foobar@example.com",
          isRequired: true,
          autocomplete: "email",
        },
        {
          name: "password",
          type: "text",
          title: "Password",
          description: "Enter 8 characters minimum.",
          isRequired: true,
          autocomplete: "password",
        },
      ],
      showQuestionNumbers: false,
    };
    return {
      creator: creator as SurveyCreatorModel,
    };
  },
});
</script>

<template>
  <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh">
    <SurveyCreatorComponent :model="creator" />
  </div>
</template>
