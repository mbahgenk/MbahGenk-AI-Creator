// MbahGenk AI Creator - Full Upgrade Script.js

// =========================
// IMAGE PREVIEW HANDLER
// =========================
function previewImage(input, previewElement) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    previewElement.innerHTML = `<img src="${e.target.result}" class="preview-img" />`;
  };
  reader.readAsDataURL(file);
}

document.getElementById("fotoProduk").addEventListener("change", function () {
  previewImage(this, document.getElementById("previewProduk"));
});

document.getElementById("fotoModel").addEventListener("change", function () {
  previewImage(this, document.getElementById("previewModel"));
});

// =========================
// AUTO SCENE BUILDER
// =========================
let sceneCount = 0;

function addScene() {
  sceneCount++;

  const div = document.createElement("div");
  div.className = "scene-box";
  div.innerHTML = `
    <h3>Scene ${sceneCount}</h3>
    <label>Adegan Model A</label>
    <input type="text" class="sceneA" placeholder="Apa yang dilakukan model A?" />

    <label>Adegan Model B</label>
    <input type="text" class="sceneB" placeholder="Apa yang dilakukan model B?" />

    <label>Dialog Model A</label>
    <input type="text" class="dialogA" placeholder="Kalimat model A" />

    <label>Dialog Model B</label>
    <input type="text" class="dialogB" placeholder="Kalimat model B" />

    <label>Durasi (detik)</label>
    <input type="number" class="duration" min="1" value="5" />
  `;

  document.getElementById("sceneContainer").appendChild(div);
}

document.getElementById("addScene").addEventListener("click", addScene);

// =========================
// AI GENERATE LINKS
// =========================
const aiLinks = {
  pika: "https://pika.art/create",
  runway: "https://app.runwayml.com",
  luma: "https://lumalabs.ai/dream-machine",
  kling: "https://klingai.com",
};

// =========================
// PROMPT GENERATOR
// =========================
document.getElementById("generateBtn").addEventListener("click", () => {
  const gender = document.getElementById("gender").value;
  const usia = document.getElementById("usia").value;
  const hijab = document.getElementById("hijab").checked ? "berhijab" : "tidak berhijab";
  const konten = document.getElementById("konten").value;
  const aiMode = document.getElementById("aiMode").value;

  // Scenes
  let scenes = "";
  const A = document.getElementsByClassName("sceneA");
  const B = document.getElementsByClassName("sceneB");
  const D_A = document.getElementsByClassName("dialogA");
  const D_B = document.getElementsByClassName("dialogB");
  const dur = document.getElementsByClassName("duration");

  for (let i = 0; i < A.length; i++) {
    scenes += `\n=== Scene ${i + 1} ===\n`;
    scenes += `Adegan Model A: ${A[i].value}\n`;
    scenes += `Adegan Model B: ${B[i].value}\n`;
    scenes += `Dialog Model A: ${D_A[i].value}\n`;
    scenes += `Dialog Model B: ${D_B[i].value}\n`;
    scenes += `Durasi: ${dur[i].value} detik\n`;
  }

  const finalPrompt = `PROMPT VIDEO 9:16\nBrand: MbahGenk AI Creator\nMode Visual: Dark Elegan Modern\n\n=== MODEL ===\nGender: ${gender}\nUsia: ${usia}\nModel: ${hijab}\n\n=== TIPE KONTEN ===\n${konten}\n\n=== SCENE DETAIL ===\n${scenes}\n\n=== INSTRUKSI VISUAL ===\n- Cinematic Ultra HD\n- Tone gelap elegan\n- Slow motion halus\n- Mid shot & close-up\n- Pencahayaan lembut premium\n\nHasil akhirnya berupa video profesional untuk TikTok, IG Reels, dan FB Ads.`;

  document.getElementById("outputPrompt").value = finalPrompt;

  // update AI link
  document.getElementById("linkVideo").href = aiLinks[aiMode];
});

// =========================
// COPY BUTTON
// =========================
document.getElementById("copyPrompt").addEventListener("click", () => {
  const text = document.getElementById("outputPrompt");
  text.select();
  document.execCommand("copy");
  alert("Prompt berhasil disalin!");
});
