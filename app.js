/* ==========================================================================
   DroitHabitat Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize Lucide Icons
  lucide.createIcons();

  /* ==========================================
     1. Hash Routing System
     ========================================== */
  const routes = {
    'home': 'view-home',
    'offres': 'view-offres',
    'paiement': 'view-paiement',
    'onboarding': 'view-onboarding',
    'login': 'view-login',
    'register': 'view-register',
    'blog': 'view-blog',
    'contact': 'view-contact',
    'legal': 'view-legal'
  };

  function router() {
    const hash = window.location.hash || '#/';
    let routeKey = 'home';
    
    if (hash.startsWith('#/offres')) {
      routeKey = 'offres';
    } else if (hash.startsWith('#/paiement')) {
      routeKey = 'paiement';
      
      // Parse query params for offer and price
      const urlParams = new URLSearchParams(hash.split('?')[1] || '');
      const offer = urlParams.get('offre') || 'memoire';
      const price = urlParams.get('price') || '99';
      
      const summaryTitle = document.getElementById('pay-summary-title');
      const summaryAmount = document.getElementById('pay-summary-amount');
      const submitBtn = document.getElementById('btn-submit-payment');
      
      if (summaryTitle) {
        summaryTitle.textContent = offer === 'memoire' ? 'Mémoire juridique' : 'Service médiation & mise en demeure';
      }
      if (summaryAmount) {
        summaryAmount.textContent = `${price} €`;
      }
      if (submitBtn) {
        submitBtn.textContent = `Payer ${price} €`;
      }
    } else if (hash.startsWith('#/onboarding')) {
      routeKey = 'onboarding';
    } else if (hash.startsWith('#/auth/login')) {
      routeKey = 'login';
    } else if (hash.startsWith('#/auth/register')) {
      routeKey = 'register';
    } else if (hash.startsWith('#/blog')) {
      routeKey = 'blog';
    } else if (hash.startsWith('#/contact')) {
      routeKey = 'contact';
    } else if (hash.startsWith('#/legal')) {
      routeKey = 'legal';
    }

    // Hide all views
    document.querySelectorAll('.view-section').forEach(view => {
      view.classList.remove('active-view');
    });

    // Show target view
    const targetId = routes[routeKey];
    const targetView = document.getElementById(targetId);
    if (targetView) {
      targetView.classList.add('active-view');
    }

    // Update active nav-link state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-route') === routeKey) {
        link.classList.add('active');
      }
    });

    // Scroll handling
    if (hash.includes('#faq')) {
      const faqSection = document.querySelector('.faq-section');
      if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
    } else if (hash.includes('#diagnostic-zone')) {
      const diagSection = document.getElementById('diagnostic-zone');
      if (diagSection) diagSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  window.addEventListener('hashchange', router);
  router(); // Run on load

  /* ==========================================
     2. Modals Management
     ========================================== */
  
  // Appt scheduler modal
  const btnSchedule = document.getElementById('btn-schedule');
  const schedulerModal = document.getElementById('scheduler-modal');
  const schedulerClose = document.getElementById('scheduler-close');
  const schedulerForm = document.getElementById('scheduler-form');

  if (btnSchedule) {
    btnSchedule.addEventListener('click', () => {
      schedulerModal.classList.add('active');
    });
  }

  schedulerClose.addEventListener('click', () => {
    schedulerModal.classList.remove('active');
  });

  schedulerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateVal = document.getElementById('sched-date').value;
    const timeVal = document.getElementById('sched-time').value;
    alert(`Votre rendez-vous a bien été planifié pour le ${dateVal} à ${timeVal}. Un conseiller va vous contacter.`);
    schedulerModal.classList.remove('active');
    schedulerForm.reset();
  });

  // Mobile menu overlay
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileModal = document.getElementById('mobile-menu-modal');
  const mobileClose = document.getElementById('mobile-menu-close');

  mobileToggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  window.addEventListener('resize', () => {
    mobileToggle.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  });

  mobileToggle.addEventListener('click', () => {
    mobileModal.classList.add('active');
  });

  mobileClose.addEventListener('click', () => {
    mobileModal.classList.remove('active');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileModal.classList.remove('active');
    });
  });

  /* ==========================================
     3. FAQ Accordions
     ========================================== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      
      // Close other items
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      // Toggle active class
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  /* ==========================================
     4. Diagnostic Questions Database
     ========================================== */
  const questions = [
    {
      id: 0,
      type: 'select',
      section: 'Informations générales',
      step: 1,
      question: "À quel moment avez-vous senti que quelque chose clochait : juste après la signature, après les premiers prélèvements, après des relances, après une mise en demeure ou après un fichage ?",
      options: [
        "Juste après la signature",
        "Après les premiers prélèvements",
        "Après des relances",
        "Après une mise en demeure",
        "Après un fichage"
      ],
      favorableCheck: () => false
    },
    {
      id: 1,
      type: 'number',
      section: 'Informations générales',
      step: 1,
      question: "Montant total du crédit (€)",
      placeholder: "Exemple : 15000",
      favorableCheck: () => false // numeric input is only for data, doesn't directly add irregularity points
    },
    {
      id: 2,
      type: 'select',
      section: 'Informations générales',
      step: 1,
      question: "Nombre de crédits conso litigieux",
      options: ["1 crédit", "2 crédits", "3 crédits ou plus"],
      favorableCheck: () => false
    },
    {
      id: 3,
      type: 'boolean',
      section: 'La vente',
      step: 2,
      question: "Un intermédiaire ou démarcheur était-il présent lors de la vente ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 4,
      type: 'boolean',
      section: 'La vente',
      step: 2,
      question: "Le contrat a-t-il été signé chez vous (à domicile) ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 5,
      type: 'boolean',
      section: 'La vente',
      step: 2,
      question: "Ont-ils respecté le délai de rétractation ?",
      favorableCheck: (val) => val === 'Non'
    },
    {
      id: 6,
      type: 'boolean',
      section: 'Situation actuelle',
      step: 3,
      question: "Les prélèvements ont-ils déjà commencé ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 7,
      type: 'boolean',
      section: 'Situation actuelle',
      step: 3,
      question: "Avez-vous déjà reçu des courriers de relance ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 8,
      type: 'boolean',
      section: 'Situation actuelle',
      step: 3,
      question: "Avez-vous reçu une mise en demeure ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 9,
      type: 'boolean',
      section: 'Situation actuelle',
      step: 3,
      question: "Êtes-vous menacé(e) de fichage Banque de France (FICP) ou avez-vous déjà été fiché(e) ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 10,
      type: 'boolean',
      section: 'Situation actuelle',
      step: 3,
      question: "Êtes-vous en retard de paiement actuellement ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 11,
      type: 'boolean',
      section: 'Vérifications de l\'organisme',
      step: 4,
      question: "L'organisme a-t-il vérifié votre solvabilité réelle ?",
      favorableCheck: (val) => val === 'Non'
    },
    {
      id: 12,
      type: 'boolean',
      section: 'Vérifications de l\'organisme',
      step: 4,
      question: "A-t-il vérifié vos revenus et vos charges ?",
      favorableCheck: (val) => val === 'Non'
    },
    {
      id: 13,
      type: 'boolean',
      section: 'Vérifications de l\'organisme',
      step: 4,
      question: "Y a-t-il des absences d'information claire (coût total, taux, risques) ?",
      favorableCheck: (val) => val === 'Oui'
    },
    {
      id: 14,
      type: 'boolean',
      section: 'Vérifications de l\'organisme',
      step: 4,
      question: "A-t-il vérifié tous les éléments sans exception (justificatifs, situation pro, charges, relevés) ?",
      favorableCheck: (val) => val === 'Non'
    },
    {
      id: 15,
      type: 'boolean',
      section: 'Vérifications de l\'organisme',
      step: 4,
      question: "L'organisme a-t-il consulté le FICP et vérifié vos crédits en cours ?",
      favorableCheck: (val) => val === 'Non'
    },
    {
      id: 16,
      type: 'boolean',
      section: 'Vérifications de l\'organisme',
      step: 4,
      question: "L'organisme avait-il connaissance de vos antécédents de fichage ou incidents bancaires ?",
      favorableCheck: (val) => val === 'Non'
    }
  ];

  /* ==========================================
     5. Shared Diagnostic State
     ========================================= */
  let currentDiagAnswers = {};
  let currentMode = 'chat'; // 'chat' or 'classic'
  let currentQuestionIndex = 0;
  
  // Audio state
  let speechEnabled = false;
  let synth = window.speechSynthesis;

  // UI Panes
  const paneIntro = document.getElementById('diag-intro-pane');
  const paneChat = document.getElementById('diag-chat-pane');
  const paneClassic = document.getElementById('diag-classic-pane');
  const paneWaiting = document.getElementById('diag-waiting-pane');
  const paneResult = document.getElementById('diag-result-pane');
  
  const tabChat = document.getElementById('tab-chat');
  const tabClassic = document.getElementById('tab-classic');
  const btnStartDiag = document.getElementById('btn-start-diag');

  // Tab switching
  tabChat.addEventListener('click', () => {
    if (currentMode !== 'chat') {
      currentMode = 'chat';
      tabChat.classList.add('active');
      tabClassic.classList.remove('active');
      resetAndStartDiagnostic();
    }
  });

  tabClassic.addEventListener('click', () => {
    if (currentMode !== 'classic') {
      currentMode = 'classic';
      tabClassic.classList.add('active');
      tabChat.classList.remove('active');
      resetAndStartDiagnostic();
    }
  });

  btnStartDiag.addEventListener('click', () => {
    paneIntro.style.display = 'none';
    if (currentMode === 'chat') {
      paneChat.style.display = 'block';
      startChatMode();
    } else {
      paneClassic.style.display = 'block';
      startClassicMode();
    }
  });

  function resetAndStartDiagnostic() {
    currentQuestionIndex = 0;
    currentDiagAnswers = {};
    
    // Stop speaking if active
    if (synth) synth.cancel();

    paneIntro.style.display = 'none';
    paneChat.style.display = 'none';
    paneClassic.style.display = 'none';
    paneWaiting.style.display = 'none';
    paneResult.style.display = 'none';

    if (currentMode === 'chat') {
      paneChat.style.display = 'block';
      startChatMode();
    } else {
      paneClassic.style.display = 'block';
      startClassicMode();
    }
  }

  /* ==========================================
     6. Voice Assistant Logic
     ========================================== */
  const btnToggleAudio = document.getElementById('btn-toggle-audio');
  
  btnToggleAudio.addEventListener('click', () => {
    speechEnabled = !speechEnabled;
    const icon = btnToggleAudio.querySelector('i');
    const textSpan = btnToggleAudio.querySelector('span');

    if (speechEnabled) {
      icon.setAttribute('data-lucide', 'volume-x');
      textSpan.textContent = "Désactiver Audio";
      btnToggleAudio.style.background = 'var(--color-primary-light)';
      btnToggleAudio.style.color = 'var(--color-primary)';
      
      // Say welcome and read first message if at index 0
      speakText("Bienvenue ! Je serai votre guide pour ce test. Commençons ! " + questions[0].question);
    } else {
      icon.setAttribute('data-lucide', 'volume-2');
      textSpan.textContent = "Activer Audio";
      btnToggleAudio.style.background = '';
      btnToggleAudio.style.color = '';
      if (synth) synth.cancel();
    }
    lucide.createIcons();
  });

  function speakText(text) {
    if (!speechEnabled || !synth) return;
    synth.cancel(); // cancel any active utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    synth.speak(utterance);
  }

  /* ==========================================
     7. Chat Mode Logic
     ========================================== */
  const chatMessagesBox = document.getElementById('chat-messages-box');
  const chatInputContainer = document.getElementById('chat-input-container');

  function startChatMode() {
    chatMessagesBox.innerHTML = '';
    chatInputContainer.innerHTML = '';
    
    // Bot Welcome message
    addChatMessage("Bot", "Bienvenue ! Je serai votre guide pour ce test. Si vous souhaitez m'entendre parler, veuillez activer l'audio.");
    
    setTimeout(() => {
      addChatMessage("Bot", "Parfait. Commençons !");
      askChatQuestion();
    }, 1000);
  }

  function addChatMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender === 'Bot' ? 'message-bot' : 'message-user'}`;
    
    if (sender === 'Bot' && speechEnabled) {
      msg.innerHTML = `<span style="display:flex; align-items:center; gap:8px;">${text} <span class="audio-wave"><span></span><span></span><span></span><span></span></span></span>`;
    } else {
      msg.textContent = text;
    }

    chatMessagesBox.appendChild(msg);
    chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
  }

  function askChatQuestion() {
    if (currentQuestionIndex >= questions.length) {
      runAnalysis();
      return;
    }

    const q = questions[currentQuestionIndex];
    addChatMessage("Bot", q.question);
    speakText(q.question);

    renderChatInputs(q);
  }

  function renderChatInputs(q) {
    chatInputContainer.innerHTML = '';

    if (q.type === 'number') {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.width = '100%';
      wrapper.style.gap = '8px';
      
      const input = document.createElement('input');
      input.type = 'number';
      input.className = 'input-field';
      input.placeholder = q.placeholder;
      
      const btnSubmit = document.createElement('button');
      btnSubmit.className = 'btn btn-primary';
      btnSubmit.style.padding = '12px';
      btnSubmit.innerHTML = '<i data-lucide="arrow-right" style="width:16px; height:16px;"></i>';
      
      wrapper.appendChild(input);
      wrapper.appendChild(btnSubmit);
      chatInputContainer.appendChild(wrapper);
      lucide.createIcons();

      const handleVal = () => {
        const val = input.value.trim();
        if (!val) return;
        addChatMessage("User", `${val} €`);
        currentDiagAnswers[q.id] = val;
        currentQuestionIndex++;
        chatInputContainer.innerHTML = '';
        setTimeout(askChatQuestion, 800);
      };

      btnSubmit.addEventListener('click', handleVal);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleVal();
      });

    } else if (q.type === 'select') {
      const wrapper = document.createElement('div');
      wrapper.className = 'chat-options-input';
      
      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.padding = '8px 16px';
        btn.textContent = opt;
        
        btn.addEventListener('click', () => {
          addChatMessage("User", opt);
          currentDiagAnswers[q.id] = opt;
          currentQuestionIndex++;
          chatInputContainer.innerHTML = '';
          setTimeout(askChatQuestion, 800);
        });
        wrapper.appendChild(btn);
      });
      chatInputContainer.appendChild(wrapper);

    } else if (q.type === 'boolean') {
      const wrapper = document.createElement('div');
      wrapper.className = 'chat-options-input';
      
      ['Oui', 'Non'].forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.padding = '8px 24px';
        btn.textContent = opt;
        
        btn.addEventListener('click', () => {
          addChatMessage("User", opt);
          currentDiagAnswers[q.id] = opt;
          currentQuestionIndex++;
          chatInputContainer.innerHTML = '';
          setTimeout(askChatQuestion, 800);
        });
        wrapper.appendChild(btn);
      });
      chatInputContainer.appendChild(wrapper);
    }
  }

  /* ==========================================
     8. Classic Mode Logic
     ========================================== */
  const classicStepLabel = document.getElementById('classic-step-label');
  const classicSectionTitle = document.getElementById('classic-section-title');
  const classicProgressFill = document.getElementById('classic-progress-fill');
  const classicStepContent = document.getElementById('classic-step-content');
  const btnClassicPrev = document.getElementById('btn-classic-prev');
  const btnClassicNext = document.getElementById('btn-classic-next');

  function startClassicMode() {
    currentQuestionIndex = 0;
    renderClassicStep();
  }

  function getStepQuestions(stepNum) {
    return questions.filter(q => q.step === stepNum);
  }

  function renderClassicStep() {
    const currentStep = Math.floor(currentQuestionIndex / 4) + 1; // 4 questions per step
    const stepQs = getStepQuestions(currentStep);

    classicStepLabel.textContent = `Étape ${currentStep} sur 4`;
    
    // Set headers
    const sectionNames = ["Informations générales", "La vente", "Situation actuelle", "Vérifications de l'organisme"];
    classicSectionTitle.textContent = sectionNames[currentStep - 1];
    
    // Progress fill
    classicProgressFill.style.width = `${(currentStep / 4) * 100}%`;

    // Render contents
    classicStepContent.innerHTML = '';
    
    stepQs.forEach(q => {
      const group = document.createElement('div');
      group.className = 'form-group';
      
      const label = document.createElement('label');
      label.className = 'form-label';
      label.textContent = q.question;
      group.appendChild(label);

      if (q.type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'input-field';
        input.placeholder = q.placeholder;
        input.value = currentDiagAnswers[q.id] || '';
        input.addEventListener('input', (e) => {
          currentDiagAnswers[q.id] = e.target.value;
        });
        group.appendChild(input);

      } else if (q.type === 'select') {
        const select = document.createElement('select');
        select.className = 'input-field select-field';
        
        const defOpt = document.createElement('option');
        defOpt.value = '';
        defOpt.textContent = '-- Choisir --';
        select.appendChild(defOpt);

        q.options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.textContent = opt;
          if (currentDiagAnswers[q.id] === opt) option.selected = true;
          select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
          currentDiagAnswers[q.id] = e.target.value;
        });
        group.appendChild(select);

      } else if (q.type === 'boolean') {
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        
        ['Oui', 'Non'].forEach(opt => {
          const btn = document.createElement('div');
          btn.className = `btn-option ${currentDiagAnswers[q.id] === opt ? 'selected' : ''}`;
          btn.textContent = opt;
          
          btn.addEventListener('click', () => {
            grid.querySelectorAll('.btn-option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentDiagAnswers[q.id] = opt;
          });
          grid.appendChild(btn);
        });
        group.appendChild(grid);
      }
      
      classicStepContent.appendChild(group);
    });

    // Control buttons
    btnClassicPrev.style.display = currentStep === 1 ? 'none' : 'block';
    btnClassicNext.textContent = currentStep === 4 ? 'Analyser mon dossier' : 'Continuer';
  }

  btnClassicPrev.addEventListener('click', () => {
    const currentStep = Math.floor(currentQuestionIndex / 4) + 1;
    currentQuestionIndex = (currentStep - 2) * 4;
    renderClassicStep();
  });

  btnClassicNext.addEventListener('click', () => {
    const currentStep = Math.floor(currentQuestionIndex / 4) + 1;
    
    // Validation check for the step
    const stepQs = getStepQuestions(currentStep);
    let valid = true;
    stepQs.forEach(q => {
      if (!currentDiagAnswers[q.id]) {
        valid = false;
      }
    });

    if (!valid) {
      alert("Veuillez répondre à toutes les questions de cette étape.");
      return;
    }

    if (currentStep < 4) {
      currentQuestionIndex = currentStep * 4;
      renderClassicStep();
    } else {
      runAnalysis();
    }
  });

  /* ==========================================
     9. Run Score & Result Evaluation
     ========================================== */
  function runAnalysis() {
    paneChat.style.display = 'none';
    paneClassic.style.display = 'none';
    paneWaiting.style.display = 'block';
    
    if (synth) synth.cancel();

    // 2 seconds loading simulation
    setTimeout(() => {
      paneWaiting.style.display = 'none';
      paneResult.style.display = 'block';
      
      // Calculate score
      let score = 0;
      questions.forEach(q => {
        const answer = currentDiagAnswers[q.id];
        if (q.favorableCheck(answer)) {
          score++;
        }
      });

      const eligibleBox = document.getElementById('diag-eligible-box');
      const prudentBox = document.getElementById('diag-prudent-box');
      const ineligibleBox = document.getElementById('diag-ineligible-box');

      // Reset visibility
      eligibleBox.style.display = 'none';
      if (prudentBox) prudentBox.style.display = 'none';
      ineligibleBox.style.display = 'none';

      const maxScore = questions.filter(q => q.favorableCheck('Oui') || q.favorableCheck('Non')).length; // 14

      if (score >= 9) {
        eligibleBox.style.display = 'block';
        document.getElementById('eligible-score-num').textContent = `${score}/${maxScore}`;
        document.getElementById('eligible-msg-desc').textContent = "Votre situation semble entrer dans notre périmètre. Nous pouvons maintenant transformer vos pièces en dossier clair, structuré et exploitable.";
        speakText("Votre situation semble entrer dans notre périmètre. Nous pouvons maintenant transformer vos pièces en dossier clair, structuré et exploitable.");
      } else if (score >= 5) {
        if (prudentBox) {
          prudentBox.style.display = 'block';
          document.getElementById('prudent-score-num').textContent = `${score}/${maxScore}`;
          document.getElementById('prudent-msg-desc').textContent = "Votre dossier mérite une vérification plus poussée. Nous allons vous indiquer les pièces et informations qui permettront d'y voir plus clair.";
        } else {
          eligibleBox.style.display = 'block';
          document.getElementById('eligible-score-num').textContent = `${score}/${maxScore}`;
          document.getElementById('eligible-msg-desc').textContent = "Votre dossier mérite une vérification plus poussée. Nous allons vous indiquer les pièces et informations qui permettront d'y voir plus clair.";
        }
        speakText("Votre dossier mérite une vérification plus poussée. Nous allons vous indiquer les pièces et informations qui permettront d'y voir plus clair.");
      } else {
        ineligibleBox.style.display = 'block';
        document.getElementById('ineligible-score-num').textContent = `${score}/${maxScore}`;
        document.getElementById('ineligible-msg-desc').textContent = "À ce stade, votre situation ne semble pas entrer clairement dans notre périmètre. Vous recevez une explication simple sur les limites identifiées.";
        speakText("À ce stade, votre situation ne semble pas entrer clairement dans notre périmètre. Vous recevez une explication simple sur les limites identifiées.");
      }
    }, 2000);
  }

  // Restart buttons handlers
  document.querySelectorAll('.btn-restart-test').forEach(btn => {
    btn.addEventListener('click', () => {
      resetAndStartDiagnostic();
      paneIntro.style.display = 'block';
    });
  });

  /* ==========================================
     10. Secondary Pages & Action Simulators
     ========================================== */
  
  // Home final CTA scroll handler
  const finalCtaBtn = document.getElementById('btn-final-cta-scroll');
  if (finalCtaBtn) {
    finalCtaBtn.addEventListener('click', () => {
      document.getElementById('diagnostic-zone').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Choose diagnostic offer redirect
  document.querySelectorAll('.btn-select-offer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const offerId = btn.getAttribute('data-offer-id');
      const price = btn.getAttribute('data-price');
      if (offerId === '3') {
        alert("Votre demande d'orientation vers un avocat partenaire a été enregistrée. Un conseiller vous contactera pour analyser vos pièces.");
        window.location.hash = '#/';
      } else {
        window.location.hash = `#/paiement?offre=${offerId === '1' ? 'memoire' : 'mediation'}&price=${price}`;
      }
    });
  });

  // Payment simulated processing
  const paymentForm = document.getElementById('payment-checkout-form');
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('btn-submit-payment');
      const currentText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Traitement en cours...";
      
      setTimeout(() => {
        alert("Paiement confirmé ! Certification Stripe réussie.");
        window.location.hash = '#/onboarding';
        paymentForm.reset();
        btn.disabled = false;
        btn.textContent = currentText;
      }, 1500);
    });
  }

  // Login form simulator
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Connexion réussie ! Bienvenue sur votre espace client.");
      window.location.hash = '#/';
      loginForm.reset();
    });
  }

  // Register form simulator
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pwd = document.getElementById('register-password').value;
      const pwdC = document.getElementById('register-confirm').value;
      
      if (pwd !== pwdC) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }
      
      alert("Création de compte réussie ! Vous êtes désormais connecté.");
      window.location.hash = '#/onboarding';
      registerForm.reset();
    });
  }

  // Contact form simulator
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Votre message a bien été envoyé ! Nous vous répondrons sous 24h.");
      contactForm.reset();
    });
  }

  // Play video mock handler
  const btnPlayVideo = document.getElementById('btn-play-video-fake');
  if (btnPlayVideo) {
    btnPlayVideo.addEventListener('click', () => {
      alert("Simulation d'enregistrement vidéo : David Pierce - Consultant chez Giggle.");
    });
  }
});
