const mongoose = require("mongoose");

const CommentSchema = require("./Collection/Comment");
const IngredientSchema = require("./Collection/Ingredient");
const PageSchema = require("./Collection/Page");
const RecipeSchema = require("./Collection/Recipe");
const UserSchema = require("./Collection/User");

const Comment = mongoose.model("Comment", CommentSchema);
const Ingredient = mongoose.model("Ingredient", IngredientSchema);
const Page = mongoose.model("Page", PageSchema);
const Recipe = mongoose.model("Recipe", RecipeSchema);
const User = mongoose.model("User", UserSchema);

try {
  mongoose.connect(
    "mongodb://chaenkim42:1234321@ds117960.mlab.com:17960/dbchtest"
  );
  console.log("connected");
} catch (err) {
  console.log("connect error");
  console.log(err.message);
}

async function setDB() {
  try {
    await Comment.remove();
    await Page.remove();
    await Ingredient.remove();
    await Recipe.remove();
    await User.remove();
    console.log("removed all data");

    const testIng1 = new Ingredient({ name: "감자", category: "main" });
    const testIng2 = new Ingredient({ name: "청양고추", category: "main" });
    const testIng3 = new Ingredient({ name: "양파", category: "main" });
    const testIng4 = new Ingredient({ name: "식용유", category: "main" });
    const testIng5 = new Ingredient({ name: "소금", category: "sub" });

    testIng1.save();
    testIng2.save();
    testIng3.save();
    testIng4.save();
    testIng5.save();

    let testIng = [];
    testIng.push(testIng1);
    testIng.push(testIng2);
    testIng.push(testIng3);
    testIng.push(testIng4);
    testIng.push(testIng5);

    const testUser1 = new User({
      name: "chaen",
      email: "chaen42@ajou.ac.kr",
      password: "test"
    });

    const testUser2 = new User({
      name: "kim",
      email: "chaenkim42@gmail.com",
      password: "test"
    });

    const testComment1 = new Comment({
      text: "좋아요",
      writtenBy: testUser2,
      writtenDate: new Date("2016-05-18T16:00:00Z")
    });

    testUser1.save();
    testUser2.save();
    testComment1.save();

    let testComments = [];
    testComments.push(testComment1);

    const testRecipe = new Recipe({
      title: "감자전",
      postBy: testUser1,
      likes: 1,
      comments: testComments,
      ingredients: testIng,
      cookingMinutes: 30
    });

    const testPage1 = new Page({
      index: 0,
      text:
        "감자전의 느끼함을 잡아주기 위해 청양고추를 사용합니다.\n양파는 단맛과 감칠맛을 내기 위한 조미료로 사용했으나, 많이 사용시 수분이 생겨 질척해지니 조금만 넣으세요",
      recipeBelong: testRecipe
    });
    const testPage2 = new Page({
      index: 1,
      text: "큼직하게 썰은 감자를 곱게 갈아주세요.",
      recipeBelong: testRecipe
    });
    const testPage3 = new Page({
      index: 2,
      text: "곱게 갈은 감자를 체에 받쳐 물기를 빼주세요",
      recipeBelong: testRecipe
    });
    const testPage4 = new Page({
      index: 3,
      text: "감자 건더기에서 거른 물에서 전분을 남겨주세요",
      recipeBelong: testRecipe
    });
    const testPage5 = new Page({
      index: 4,
      text: "감자 건더기와 전분을 섞어주세요",
      recipeBelong: testRecipe
    });
    const testPage6 = new Page({
      index: 5,
      text: "곱게 다진 청양고추와 양파를 섞어주세요",
      recipeBelong: testRecipe
    });
    const testPage7 = new Page({
      index: 6,
      text:
        "중불에 달구어진 팬에 식용유를 넉넉히 두르고 부침개를 노릇하게 부쳐주면 완성!",
      recipeBelong: testRecipe
    });

    testPage1.save();
    testPage2.save();
    testPage3.save();
    testPage4.save();
    testPage5.save();
    testPage6.save();
    testPage7.save();

    let testPages = [];
    testPages.push(testPage1);
    testPages.push(testPage2);
    testPages.push(testPage3);
    testPages.push(testPage4);
    testPages.push(testPage5);
    testPages.push(testPage6);
    testPages.push(testPage7);

    testRecipe.pages = testPages;
    testRecipe.save();

    console.log("we have set all data");
    console.log("데이터 불러오는중....");

    let comments = await Comment.find();
    let pages = await Page.find();
    let ingredients = await Ingredient.find();
    let recipes = await Recipe.find();
    let users = await User.find();

    console.log("comments\n", comments);
    console.log("pages\n", pages);
    console.log("ingredients\n", ingredients);
    console.log("recipes\n", recipes);
    console.log("users\n", users);
  } catch (err) {
    console.log(err.message);
  }
}

try {
  setDB();
} catch (err) {
  console.log("error", err.message);
  return err;
}
