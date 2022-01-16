const extrovert = ["빨리 어울리는", "생기 있는", "일단 행동하는", "말로 표현하는", "다가가는", "오래 대화하는", "함께하는", "외출하는", "크게 웃는", "활발한", "쉽게 알려지는", "참여하는", "열정적인", "활동적인", "사교적인", "재빠른", "생동감 있는", "다양한 관심", "모험적인", "경험하는"]
const introvert = ["천천히 어울리는", "차분한", "충분히 생각하는", "말이 적은", "기다리는", "짧게 대화하는", "혼자 집중하는", "휴식하는", "미소 짓는", "조용한", "천천히 알려지는", "반추하는", "정적인", "신중한", "개인적인", "진중한", "안정감 있는", "집중하는", "조심성 있는", "생각하는"]

for(let i = 0; i < extrovert.length; i++){
    document.querySelector(".ext-int").innerHTML += `
    <span>${i+1}.</span>
    <article>
        <input type="radio" name="ext-int-q${i}" id="ext-${i}" class="extro" />
        <label for="ext-${i}">${extrovert[i]}</label>
        <input type="radio" name="ext-int-q${i}" id="int-${i}" class="intro" />
        <label for="int-${i}">${introvert[i]}</label>
      </article>
    `
}

document.querySelector(".ext-int").innerHTML

const bamboo = ["논리적인", "전문적인", "개혁적인", "전략적인", "통찰하는", "확고한", "토론하는", "예측하는", "개발하는", "합리적인", "비평적인", "객관적인", "논쟁적인", "비유적인", "결단하는", "기획하는", "분석적인", "독창적인", "자신감 있는", "지적인"]
const plum = ["성실한", "순서를 따르는", "질서를 지키는", "모범적인", "준비하는", "협력하는", "자세가 바른", "마무리하는", "끈기있는", "부지런한", "꼼꼼한", "구조화된", "권위를 존중하는", "근면한", "믿음직한", "규범적인", "세밀한", "단정한", "한결같은", "확실한"]
const orchid = ["여유로운", "그때그때", "유연한", "편의적인", "간편한", "빨리 잊어버리는", "재미있는", "걱정이 적은", "자발적인", "단순한", "임기응변적인", "간결한", "농담을 잘하는", "태평스러운", "흥겨운", "느긋한", "개방적인", "편리한", "쉽게 생각하는", "충동적인"]
const chrysanthemum = ["배려하는", "마음을 읽는", "칭찬하는", "가엾게 여기는", "위로하는", "동정적인", "지지해주는", "자비로운", "공감하는", "격려하는", "감성적인", "의미있는", "낭만적인", "온화한", "관계적인", "사려깊은", "온정적인", "친밀한", "관계를 중시하는", "양보하는"]

for(let i = 0; i < bamboo.length; i++){
    if(i < 5){
        document.querySelector(".four-gunja").innerHTML += `
        <h3>
        ${i+1}. 네 단어 중 자신을 가장 잘 표현하고 가까운 것 하나에 체크하세요.
        </h3>
        <article id="q${i}-1" class="four-gunja-q">
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}"
            id="bamboo-${i}"
            class="bamboo-circle"
            onclick="circleTriangleHandler(${i})"
          />
          <label for="bamboo-${i}">${bamboo[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}"
            id="plum-${i}"
            class="plum-circle"
            onclick="circleTriangleHandler(${i})"
          />
          <label for="plum-${i}">${plum[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}"
            id="orchid-${i}"
            class="orchid-circle"
            onclick="circleTriangleHandler(${i})"
          />
          <label for="orchid-${i}">${orchid[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}"
            id="chrysanthemum-${i}"
            class="chrysanthemum-circle"
            onclick="circleTriangleHandler(${i})"
          />
          <label for="chrysanthemum-${i}">${chrysanthemum[i]}</label>
        </div>
      </article>
      <h3>
        그 다음 가까운 것 하나에 체크하세요.
      </h3>
      <article id="q${i}-2" class="four-gunja-q">
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="bamboo-${i}-triangle"
            class="bamboo-triangle"
          />
          <label for="bamboo-${i}-triangle">${bamboo[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="plum-${i}-triangle"
            class="plum-triangle"
          />
          <label for="plum-${i}-triangle">${plum[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="orchid-${i}-triangle"
            class="orchid-triangle"
          />
          <label for="orchid-${i}-triangle">${orchid[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="chrysanthemum-${i}-triangle"
            class="chrysanthemum-triangle"
          />
          <label for="chrysanthemum-${i}-triangle">${chrysanthemum[i]}</label>
          </div>
        </article>
        `
    } else if(i >= 5 && i < 10){
        document.querySelector(".four-gunja").innerHTML += `
        <h3>
            ${i+1}. 네 단어 중 자신을 가장 잘 표현하고 가까운 것 하나에 체크하세요.
        </h3>
        <article id="q${i}-1" class="four-gunja-q">
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="chrysanthemum-${i}"
              class="chrysanthemum-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="chrysanthemum-${i}">${chrysanthemum[i]}</label>
          </div>
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="bamboo-${i}"
              class="bamboo-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="bamboo-${i}">${bamboo[i]}</label>
          </div>
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="plum-${i}"
              class="plum-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="plum-${i}">${plum[i]}</label>
          </div>
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="orchid-${i}"
              class="orchid-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="orchid-${i}">${orchid[i]}</label>
          </div>
      </article>
      <h3>
          그 다음 가까운 것 하나에 체크하세요.
      </h3>
      <article id="q${i}-2" class="four-gunja-q">
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="chrysanthemum-${i}-triangle"
            class="chrysanthemum-triangle"
          />
          <label for="chrysanthemum-${i}-triangle">${chrysanthemum[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="bamboo-${i}-triangle"
            class="bamboo-triangle"
          />
          <label for="bamboo-${i}-triangle">${bamboo[i]}</label>
        </div>
        <div class="answer">  
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="plum-${i}-triangle"
            class="plum-triangle"
          />
          <label for="plum-${i}-triangle">${plum[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="orchid-${i}-triangle"
            class="orchid-triangle"
          />
          <label for="orchid-${i}-triangle">${orchid[i]}</label>
        </div>
      </article>
        `
    } else if(i >= 10 && i < 15){
        document.querySelector(".four-gunja").innerHTML += `
        <h3>
            ${i+1}. 네 단어 중 자신을 가장 잘 표현하고 가까운 것 하나에 체크하세요.
        </h3>
        <article id="q${i}-1" class="four-gunja-q">
          <div class="answer">  
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="orchid-${i}"
              class="orchid-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="orchid-${i}">${orchid[i]}</label>
          </div>
          <div class="answer">  
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="chrysanthemum-${i}"
              class="chrysanthemum-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="chrysanthemum-${i}">${chrysanthemum[i]}</label>
          </div>
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="bamboo-${i}"
              class="bamboo-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="bamboo-${i}">${bamboo[i]}</label>
          </div>
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="plum-${i}"
              class="plum-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="plum-${i}">${plum[i]}</label>
          </div>
      </article>
      <h3>
        그 다음 가까운 것 하나에 체크하세요.
      </h3>
      <article id="q${i}-2" class="four-gunja-q">
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="orchid-${i}-triangle"
            class="orchid-triangle"
          />
          <label for="orchid-${i}-triangle">${orchid[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="chrysanthemum-${i}-triangle"
            class="chrysanthemum-triangle"
          />
          <label for="chrysanthemum-${i}-triangle">${chrysanthemum[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="bamboo-${i}-triangle"
            class="bamboo-triangle"
          />
          <label for="bamboo-${i}-triangle">${bamboo[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="plum-${i}-triangle"
            class="plum-triangle"
          />
          <label for="plum-${i}-triangle">${plum[i]}</label>
        </div>
      </article>
        `
    } else {
        document.querySelector(".four-gunja").innerHTML += `
        <h3>
        ${i+1}. 네 단어 중 자신을 가장 잘 표현하고 가까운 것 하나에 체크하세요.
        </h3>
        <article id="q${i}-1" class="four-gunja-q">
          <div class="answer">        
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="plum-${i}"
              class="plum-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="plum-${i}">${plum[i]}</label>
          </div>
          <div class="answer">  
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="orchid-${i}"
              class="orchid-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="orchid-${i}">${orchid[i]}</label>
          </div>
          <div class="answer">
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="chrysanthemum-${i}"
              class="chrysanthemum-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="chrysanthemum-${i}">${chrysanthemum[i]}</label>
          </div>
          <div class="answer">  
            <input
              type="radio"
              name="4-gunja-q${i}"
              id="bamboo-${i}"
              class="bamboo-circle"
              onclick="circleTriangleHandler(${i})"
            />
            <label for="bamboo-${i}">${bamboo[i]}</label>
          </div>
      </article>
      <h3>
        그 다음 가까운 것 하나에 체크하세요.
      </h3>
      <article id="q${i}-2" class="four-gunja-q">
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="plum-${i}-triangle"
            class="plum-triangle"
          />
          <label for="plum-${i}-triangle">${plum[i]}</label>
        </div>
        <div class="answer">
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="orchid-${i}-triangle"
            class="orchid-triangle"
          />
          <label for="orchid-${i}-triangle">${orchid[i]}</label>
        </div>
        <div class="answer">  
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="chrysanthemum-${i}-triangle"
            class="chrysanthemum-triangle"
          />
          <label for="chrysanthemum-${i}-triangle">${chrysanthemum[i]}</label>
        </div>
        <div class="answer">  
          <input
            type="radio"
            name="4-gunja-q${i}-2"
            id="bamboo-${i}-triangle"
            class="bamboo-triangle"
          />
          <label for="bamboo-${i}-triangle">${bamboo[i]}</label>
        </div>
      </article>
        `
    }
}

function checkedFalseHandler(x) {
    document.getElementById(`bamboo-${x}-triangle`).checked = false;
    document.getElementById(`plum-${x}-triangle`).checked = false;
    document.getElementById(`orchid-${x}-triangle`).checked = false;
    document.getElementById(`chrysanthemum-${x}-triangle`).checked = false;
  }

  function circleTriangleHandler(x) {
    const answer1 = document.getElementById(`bamboo-${x}`);
    const answer2 = document.getElementById(`plum-${x}`);
    const answer3 = document.getElementById(`orchid-${x}`);
    const answer4 = document.getElementById(`chrysanthemum-${x}`);

    const answer1_2 = document.getElementById(`bamboo-${x}-triangle`);
    const answer2_2 = document.getElementById(`plum-${x}-triangle`);
    const answer3_2 = document.getElementById(`orchid-${x}-triangle`);
    const answer4_2 = document.getElementById(`chrysanthemum-${x}-triangle`);

    if (answer1.checked) {
      checkedFalseHandler(x);
      answer1_2.disabled = true;
      answer2_2.disabled = false;
      answer3_2.disabled = false;
      answer4_2.disabled = false;
    } else if (answer2.checked) {
      checkedFalseHandler(x);
      answer1_2.disabled = false;
      answer2_2.disabled = true;
      answer3_2.disabled = false;
      answer4_2.disabled = false;
    } else if (answer3.checked) {
      checkedFalseHandler(x);
      answer1_2.disabled = false;
      answer2_2.disabled = false;
      answer3_2.disabled = true;
      answer4_2.disabled = false;
    } else if (answer4.checked) {
      checkedFalseHandler(x);
      answer1_2.disabled = false;
      answer2_2.disabled = false;
      answer3_2.disabled = false;
      answer4_2.disabled = true;
    }
  }

  function resultHandler() {
    let extro = 0;
    let intro = 0;

    let answers = document.getElementsByClassName("extro");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        extro++;
      }
    }

    answers = document.getElementsByClassName("intro");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        intro++;
      }
    }

    let bamCircle = 0;
    let plCircle = 0;
    let orcCircle = 0;
    let chrCircle = 0;

    answers = document.getElementsByClassName("bamboo-circle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        bamCircle = bamCircle + 2;
      }
    }

    answers = document.getElementsByClassName("plum-circle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        plCircle = plCircle + 2;
      }
    }

    answers = document.getElementsByClassName("orchid-circle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        orcCircle = orcCircle + 2;
      }
    }

    answers = document.getElementsByClassName("chrysanthemum-circle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        chrCircle = chrCircle + 2;
      }
    }

    let bamTriangle = 0;
    let plTriangle = 0;
    let orcTriangle = 0;
    let chrTriangle = 0;

    answers = document.getElementsByClassName("bamboo-triangle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        bamTriangle++;
      }
    }

    answers = document.getElementsByClassName("plum-triangle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        plTriangle++;
      }
    }

    answers = document.getElementsByClassName("orchid-triangle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        orcTriangle++;
      }
    }

    answers = document.getElementsByClassName("chrysanthemum-triangle");
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        chrTriangle++;
      }
    }

    if (extro + intro + (bamCircle + plCircle + orcCircle + chrCircle)/2 + bamTriangle + plTriangle + orcTriangle + chrTriangle != 60) {
      return alert("모든 문항에 답해주세요");
    }

    let total = [
        { name : "bam", value : bamCircle + bamTriangle },
        { name : "pl", value : plCircle + plTriangle },
        { name : "orc", value : orcCircle + orcTriangle },
        { name : "chr", value : chrCircle + chrTriangle }]
        
        total.sort(function (a, b) {
            if (a.value > b.value) {
              return 1;
            }
            if (a.value < b.value) {
              return -1;
            }
            return 0;
          });
    
          document.getElementById("ext-score").innerHTML = `${extro}`
          document.getElementById("int-score").innerHTML = `${intro}`
          document.getElementById("pl-score").innerHTML = `${plCircle + plTriangle}`
          document.getElementById("orc-score").innerHTML = `${orcCircle + orcTriangle}`
          document.getElementById("chr-score").innerHTML = `${chrCircle + chrTriangle}`
          document.getElementById("bam-score").innerHTML = `${bamCircle + bamTriangle}`      

          document.getElementById("result-table").classList.remove("hide")

    if (extro > intro) {
        window.open(`ext/${total[3].name}_${total[2].name}.html`);
    } else {
        window.open(`int/${total[3].name}_${total[2].name}.html`);
    }
  }

  const result = document.getElementById("result");
  result.addEventListener("click", resultHandler);