<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderComponent />
  <main>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div v-for="(question, index) in AllQuestions" :key="index" class="card">
          <div class="card-body">
          <p>{{ question.Question }}</p>
          <div v-for="(input, index) in question.PossibleAnswers" :key="index">
            <template v-if="input.TypeInput === 'radio'">
              <div v-if="input.PossibilityOne">
                <input
                  type="radio"
                  :name="'question' + qIndex"
                  :value="input.PossibilityOne"
                />
                {{ input.PossibilityOne }}
              </div>
              <div v-if="input.PossibilityTwo">
                <input
                  type="radio"
                  :name="'question' + qIndex"
                  :value="input.PossibilityTwo"
                />
                {{ input.PossibilityTwo }}
              </div>
              <div v-if="input.PossibilityThree">
                <input
                  type="radio"
                  :name="'question' + qIndex"
                  :value="input.PossibilityThree"
                />
                {{ input.PossibilityThree }}
              </div>
              <div v-if="input.PossibilityFour">
                <input
                  type="radio"
                  :name="'question' + qIndex"
                  :value="input.PossibilityFour"
                />
                {{ input.PossibilityFour }}
              </div>
              <div v-if="input.PossibilityFive">
                <input
                  type="radio"
                  :name="'question' + qIndex"
                  :value="input.PossibilityFive"
                />
                {{ input.PossibilityFive }}
              </div>
            </template>
            <template v-else-if="input.type === 'text'">
              <input type="text" v-model="input.value" />
            </template>
          </div>
        </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </main>
  <footer class="bg-dark">
    <div class="row"><div class="col-12">Footer</div></div>
  </footer>
</template>
<script>
import QuestionService from "@/Services/QuestionService";
import HeaderComponent from "../GenericComponent/HeaderComponent.vue";

export default {
  name: "Accueil",
  components: { HeaderComponent },
  data() {
    return {
      AllQuestions: {},
    };
  },
  created() {
    this.GetAllQuestions();
  },
  methods: {
    GetAllQuestions() {
      QuestionService.GetAllQuestions()
        .then((response) => {
          const questions = response.data.ob;
          // Suppose that `questions` includes an array of possible answers for each question
          this.AllQuestions = questions.map((question) => ({
            ...question,
            PossibleAnswers: question.PossibleAnswers.map((answer) => ({
              ...answer,
              value: "",
            })),
          }));
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
        });
    },
  },
};
</script>