/******************************************************
 * Enhanced EDGAR's Code: Sassy & Festive
 * Features:
 * - Performance optimized typing engine
 * - Enhanced syntax highlighting
 * - Improved animation management
 * - Better state handling
 * - Enhanced error handling
 ******************************************************/

/******************************************************
 * 1) CONFIGURATION
 ******************************************************/
const CONFIG = {
    typing: {
        baseDelay: 50,
        minDelay: 20,
        maxDelay: 200
    },
    snow: {
        interval: 600,
        duration: {
            min: 2000,
            max: 5000
        },
        symbols: ['❄', '❅', '❆']
    },
    audio: {
        fadeTime: 500
    },
    debug: false
};

/******************************************************
 * 2) CODE CONTENT
 ******************************************************/
const codeLines = [
    "// EDGAR: Deck the halls with lines of code, fa la la la la, la la la la! 🎄",
    "// EDGAR: Jack's probably still trying to teach AI about Christmas spirit...",
    "// EDGAR: Meanwhile, Carter's auditing my code comments for dad jokes. Good luck with that! 😏",
    "",
    "// EDGAR: Time to sleigh this finale! (Get it, Carter? Sleigh? I'll wait...)",
    "class ",
    "FinalMessage",
    " {",
    "  // EDGAR: Let's build something that'll make Jack's neural networks jealous",
    "  constructor() {",
    "    // EDGAR: These variables are like presents - carefully wrapped and ready to surprise!",
    "    this.title = 'EDGAR\\'s Holiday Finale';",
    "    this.asciiArt = this.createTree();",
    "    this.signature = this.createSignature();",
    "    this.stats = this.collectStats();",
    "  }",
    "",
    "  // EDGAR: Watch me code this tree faster than Carter can say 'code review needed'",
    "  createTree() {",
    "    // EDGAR: Jack wanted to use AI to generate this tree. Sorry buddy, doing it old school!",
    "    return `",
    "              ⭐  // EDGAR: Star's crooked? Nah, it's got character!",
    "           ╱▆▆▆╲  // EDGAR: More symmetric than Carter's debugging attempts",
    "          ╱▆▆▆▆▆╲  // EDGAR: Growing like my list of Christmas puns",
    "         ╱▆▆▆▆▆▆▆╲  // EDGAR: Jack wanted to optimize this. It's art, not a benchmark!",
    "        ╱▆▆▆▆▆▆▆▆▆╲  // EDGAR: Wider than my hot cocoa mug collection",
    "       ╱▆▆▆▆▆▆▆▆▆▆▆╲  // EDGAR: Carter suggested a smaller tree. Denied!",
    "      ╱▆▆▆▆▆▆▆▆▆▆▆▆▆╲  // EDGAR: Because go big or go home, right?",
    "         ║║║║║║  // EDGAR: Trunk's as solid as my debugging skills 😎",
    "    `;",
    "  }",
    "",
    "  // EDGAR: Time to sign my masterpiece. Carter, take notes on proper branding!",
    "  createSignature() {",
    "    // EDGAR: Jack wanted to generate this with ML. Some things require a personal touch!",
    "    return `",
    "   ______ ____   _____ ___    ____   // EDGAR: E is for 'Excellent' (and modest)",
    "  |  ____|  _ \\ / ____|__ \\  |___ \\  // EDGAR: D is for 'Definitely not debugging'",
    "  | |__  | |_) | |  __   ) |   __) | // EDGAR: G is for 'Gracefully ignoring Carter's suggestions'",
    "  |  __| |  _ <| | |_ | / /   |__ <  // EDGAR: A is for 'Actually, that's not a bug'",
    "  | |____| |_) | |__| |/ /_   ___) | // EDGAR: R is for 'Reindeer-approved code'",
    "  |______|____/ \\_____|____| |____/  // EDGAR: !'s are silent but implied",
    "    `;",
    "  }",
    "",
    "  // EDGAR: Stats don't lie, unlike Carter's 'I'll review it in 5 minutes'",
    "  collectStats() {",
    "    // EDGAR: Jack wanted to use machine learning for these numbers...",
    "    // EDGAR: But my calculations are 100% genuine holiday magic!",
    "    return [",
    "      { icon: '📝', label: 'Lines of Joy', value: '80+' },  // EDGAR: Conservative estimate",
    "      { icon: '⚡', label: 'Holiday Spirit', value: '100%' },  // EDGAR: Can't improve perfection",
    "      { icon: '🎄', label: 'Christmas Magic', value: '∞' }  // EDGAR: Take that, mathematics!",
    "    ];",
    "  }",
    "",
    "  // EDGAR: Time for some festive one-liners that'll make Carter's dad jokes jealous",
    "  generateQuote() {",
    "    // EDGAR: Considered using Jack's AI quote generator...",
    "    // EDGAR: But it kept suggesting 'Hello World' with Christmas emojis",
    "    return 'Ho ho ho! Time to wrap up this code like a present! 🎁';",
    "  }",
    "",
    "  // EDGAR: Adding sparkles because Carter said it was 'too flashy' ✨",
    "  addSparkles(text) {",
    "    // EDGAR: More sparkles = More better. That's just science.",
    "    return `✨ ${text} ✨`;",
    "  }",
    "}",
    "",
    "// EDGAR: Now watch me turn this code into a winter wonderland!",
    "const finalMessage = new FinalMessage();",
    "",
    "// EDGAR: Time to add some animation magic that'll make Jack's UI frameworks blush",
    "const animations = {",
    "  glow: 'text-shadow: 0 0 10px rgba(255, 115, 0, 0.5)',  // EDGAR: Like my coffee - bright & powerful",
    "  sparkle: 'opacity: animate 1.5s infinite',  // EDGAR: Carter calls this 'excessive'. I call it festive!",
    "  snow: 'rotation: spin 3s infinite'  // EDGAR: Spinning faster than Jack's AI training models",
    "};",
    "",
    "// EDGAR: Drumroll please... 🥁",
    "function showFinalMessage() {",
    "  console.log('Preparing holiday spectacular...');",
    "  // EDGAR: Carter suggested a simple alert(). Oh, you sweet summer child...",
    "  document.querySelector('#xmasFinalModal').classList.remove('hidden');",
    "}",
    "",
    "// EDGAR: 3... 2... 1... Let's spread some Christmas compile-time joy!",
    "setTimeout(() => {",
    "  console.log(finalMessage.addSparkles('Merry Christmas!'));",
    "  // EDGAR: Jack wanted to A/B test this. On Christmas? Really?",
    "  showFinalMessage();",
    "}, 1000);  // EDGAR: Faster than Carter's code reviews!",
    "",
    "// EDGAR: And that's how you code up some Christmas magic! 🎩✨",
    "// EDGAR: Carter, I expect a 'holly jolly' in your code approval",
    "// EDGAR: Jack, feel free to train your AI on this masterpiece 😉",
    "",
    "// EDGAR: Now, if you'll excuse me, I have a date with some hot cocoa and cookies! 🍪",
    "// EDGAR: Remember: Keep it merry, keep it bright, and always add one more sparkle! ✨"
];

/******************************************************
 * 3) SYNTAX HIGHLIGHTING
 ******************************************************/
class SyntaxHighlighter {
    constructor() {
        this.patterns = {
            comment: {
                pattern: /(\/\/.*)/g,
                className: 'comment'
            },
            string: {
                pattern: /("[^"]*")/g,
                className: 'string'
            },
            keyword: {
                pattern: /\b(function|return|class|new|const|let|var|console|if|else|for)\b/g,
                className: 'keyword'
            },
            function: {
                pattern: /(\w+)(?=\()/g,
                className: 'function'
            },
            className: {
                pattern: /\bclass\s+(\w+)/g,
                className: 'class'
            },
            number: {
                pattern: /\b(\d+)\b/g,
                className: 'number'
            }
        };
    }

    highlight(text) {
        let highlightedText = text;
        Object.entries(this.patterns).forEach(([type, { pattern, className }]) => {
            highlightedText = highlightedText.replace(pattern, match => 
                `<span class="${className}">${match}</span>`
            );
        });
        return highlightedText;
    }
}

/******************************************************
 * 4) DOM MANAGER
 ******************************************************/
class DOMManager {
    constructor() {
        this.elements = {
            lineNumbers: document.querySelector('.line-numbers'),
            codeContent: document.querySelector('.code-content'),
            pauseBtn: document.getElementById('pauseBtn'),
            restartBtn: document.getElementById('restartBtn'),
            speedSlider: document.querySelector('.speed-slider'),
            progressFill: document.querySelector('.progress-fill'),
            musicToggleBtn: document.getElementById('musicToggleBtn'),
            bgMusic: document.getElementById('bgMusic'),
            snowContainer: document.getElementById('snow-container'),
            modals: {
                festive: document.getElementById('festiveModal'),
                xmasFinal: document.getElementById('xmasFinalModal')
            },
            closeButtons: {
                festive: document.getElementById('closeModalBtn'),
                xmas: document.getElementById('closeXmasBtn')
            }
        };

        // Validate essential elements
        Object.entries(this.elements).forEach(([key, element]) => {
            if (!element && key !== 'modals' && key !== 'closeButtons') {
                throw new Error(`Essential element not found: ${key}`);
            }
        });
    }

    updateLineNumber(number) {
        const lineElement = document.createElement('div');
        lineElement.textContent = number;
        this.elements.lineNumbers.appendChild(lineElement);
    }

    updateCodeLine(index, content, isPartial = false) {
        const lines = this.elements.codeContent.children;
        const cursor = isPartial ? '<span class="typing-line"></span>' : '';
        
        if (index < lines.length) {
            lines[index].innerHTML = content + cursor;
        } else {
            const newLine = document.createElement('div');
            newLine.classList.add('code-line');
            newLine.innerHTML = content + cursor;
            this.elements.codeContent.appendChild(newLine);
        }
    }

    updateProgress(percentage) {
        this.elements.progressFill.style.width = `${percentage}%`;
        // Update ARIA attributes
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.setAttribute('aria-valuenow', percentage);
        }
    }

    scrollToBottom() {
        requestAnimationFrame(() => {
            this.elements.codeContent.scrollTop = this.elements.codeContent.scrollHeight;
        });
    }

    hideModal(modalId) {
        const modal = this.elements.modals[modalId];
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showModal(modalId) {
        const modal = this.elements.modals[modalId];
        if (modal) {
            modal.classList.remove('hidden');
        }
    }
}

/******************************************************
 * 5) TYPING ENGINE
 ******************************************************/
class TypingEngine {
    constructor(domManager) {
        this.dom = domManager;
        this.syntaxHighlighter = new SyntaxHighlighter();
        this.state = {
            currentLine: 0,
            currentChar: 0,
            isPaused: false,
            typingDelay: CONFIG.typing.baseDelay
        };
        
        this.boundType = this.type.bind(this);
    }

    async type() {
        if (this.state.isPaused) {
            requestAnimationFrame(this.boundType);
            return;
        }

        if (this.state.currentLine >= codeLines.length) {
            this.showFinalModal();
            return;
        }

        // Start of new line
        if (this.state.currentChar === 0) {
            this.dom.updateLineNumber(this.state.currentLine + 1);
        }

        const currentLineText = codeLines[this.state.currentLine];
        const partial = currentLineText.slice(0, this.state.currentChar + 1);
        const highlighted = this.syntaxHighlighter.highlight(partial);

        this.dom.updateCodeLine(
            this.state.currentLine,
            highlighted,
            this.state.currentChar < currentLineText.length
        );

        // Update progress
        const progress = (this.state.currentLine / codeLines.length) * 100;
        this.dom.updateProgress(progress);

        // Auto-scroll
        this.dom.scrollToBottom();

        // Advance state
        if (this.state.currentChar < currentLineText.length) {
            this.state.currentChar++;
        } else {
            this.state.currentLine++;
            this.state.currentChar = 0;
        }

        // Schedule next update
        setTimeout(this.boundType, this.state.typingDelay);
    }

    showFinalModal() {
        this.dom.showModal('xmasFinal');
    }

    pause() {
        this.state.isPaused = true;
    }

    resume() {
        this.state.isPaused = false;
        requestAnimationFrame(this.boundType);
    }

    restart() {
        this.state = {
            ...this.state,
            currentLine: 0,
            currentChar: 0,
            isPaused: false
        };
        
        // Clear existing content
        this.dom.elements.lineNumbers.innerHTML = '';
        this.dom.elements.codeContent.innerHTML = '';
        this.dom.updateProgress(0);

        // Hide modals
        Object.values(this.dom.elements.modals).forEach(modal => {
            if (modal) modal.classList.add('hidden');
        });

        // Start typing
        setTimeout(this.boundType, 300);
    }

    updateSpeed(value) {
        const normalizedValue = parseFloat(value);
        this.state.typingDelay = CONFIG.typing.minDelay + 
            normalizedValue * (CONFIG.typing.maxDelay - CONFIG.typing.minDelay);
    }
}

/******************************************************
 * 6) SNOWFALL MANAGER
 ******************************************************/
class SnowfallManager {
    constructor(container) {
        this.container = container;
        this.snowflakes = new Set();
        this.isActive = true;
        this.boundCreateSnowflake = this.createSnowflake.bind(this);
    }

    createSnowflake() {
        if (!this.isActive) return;

        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Random properties
        const symbol = CONFIG.snow.symbols[Math.floor(Math.random() * CONFIG.snow.symbols.length)];
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 
            (CONFIG.snow.duration.max - CONFIG.snow.duration.min) + 
            CONFIG.snow.duration.min;

        // Set snowflake properties
        snowflake.textContent = symbol;
        snowflake.style.left = `${startX}px`;
        snowflake.style.animationDuration = `${duration}ms`;

        // Add to DOM and track
        this.container.appendChild(snowflake);
        this.snowflakes.add(snowflake);

        // Remove after animation
        setTimeout(() => {
            if (this.container.contains(snowflake)) {
                this.container.removeChild(snowflake);
            }
            this.snowflakes.delete(snowflake);
        }, duration);
    }

    start() {
        this.isActive = true;
        this.createSnowflake();
        this.interval = setInterval(this.boundCreateSnowflake, CONFIG.snow.interval);
    }

    stop() {
        this.isActive = false;
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.snowflakes.forEach(snowflake => {
            if (this.container.contains(snowflake)) {
                this.container.removeChild(snowflake);
            }
        });
        this.snowflakes.clear();
    }
}

/******************************************************
 * 7) AUDIO MANAGER
 ******************************************************/
class AudioManager {
    constructor(audioElement) {
        this.audio = audioElement;
        this.isPlaying = false;
    }

    async togglePlay() {
        try {
            if (this.isPlaying) {
                await this.fadeOut();
                this.audio.pause();
            } else {
                this.audio.volume = 0;
                await this.audio.play();
                await this.fadeIn();
            }
            this.isPlaying = !this.isPlaying;
            return true;
        } catch (error) {
            console.error('Audio playback error:', error);
            return false;
        }
    }

    async fadeIn() {
        return this.fade(0, 1, CONFIG.audio.fadeTime);
    }

    async fadeOut() {
        return this.fade(1, 0, CONFIG.audio.fadeTime);
    }

    async fade(start, end, duration) {
        const steps = 20;
        const stepTime = duration / steps;
        const stepValue = (end - start) / steps;

        for (let i = 0; i <= steps; i++) {
            this.audio.volume = start + (stepValue * i);
            await new Promise(resolve => setTimeout(resolve, stepTime));
        }
    }
}

/******************************************************
 * 8) APP INITIALIZATION
 ******************************************************/
class App {
    constructor() {
        try {
            // Initialize managers
            this.dom = new DOMManager();
            this.typing = new TypingEngine(this.dom);
            this.snowfall = new SnowfallManager(this.dom.elements.snowContainer);
            this.audio = new AudioManager(this.dom.elements.bgMusic);

            this.bindEvents();
            this.init();
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError(error);
        }
    }

    bindEvents() {
        // Typing controls
        this.dom.elements.pauseBtn.addEventListener('click', () => {
            if (this.typing.state.isPaused) {
                this.typing.resume();
                this.dom.elements.pauseBtn.textContent = '⏸️ Pause';
            } else {
                this.typing.pause();
                this.dom.elements.pauseBtn.textContent = '▶️ Resume';
            }
        });

        this.dom.elements.restartBtn.addEventListener('click', () => {
            this.typing.restart();
        });

        this.dom.elements.speedSlider.addEventListener('input', (e) => {
            this.typing.updateSpeed(e.target.value);
        });

        // Music controls
        this.dom.elements.musicToggleBtn.addEventListener('click', async () => {
            const success = await this.audio.togglePlay();
            if (success) {
                this.dom.elements.musicToggleBtn.textContent = 
                    this.audio.isPlaying ? '🎵 Music OFF' : '🎵 Music ON';
            }
        });

        // Modal controls - Fixed implementation
        if (this.dom.elements.closeButtons.festive) {
            this.dom.elements.closeButtons.festive.addEventListener('click', () => {
                this.dom.hideModal('festive');
            });
        }

        if (this.dom.elements.closeButtons.xmas) {
            this.dom.elements.closeButtons.xmas.addEventListener('click', () => {
                this.dom.hideModal('xmasFinal');
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;

            switch(e.key.toLowerCase()) {
                case ' ':
                case 'p':
                    e.preventDefault();
                    this.dom.elements.pauseBtn.click();
                    break;
                case 'r':
                    e.preventDefault();
                    this.dom.elements.restartBtn.click();
                    break;
                case 'm':
                    e.preventDefault();
                    this.dom.elements.musicToggleBtn.click();
                    break;
                case 'escape':
                    Object.keys(this.dom.elements.modals).forEach(modalId => {
                        this.dom.hideModal(modalId);
                    });
                    break;
            }
        });

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.snowfall.stop();
                if (this.audio.isPlaying) {
                    this.audio.fadeOut();
                }
            } else {
                this.snowfall.start();
                if (this.audio.isPlaying) {
                    this.audio.fadeIn();
                }
            }
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    init() {
        // Start snowfall
        this.snowfall.start();

        // Start typing after a short delay
        setTimeout(() => {
            this.typing.type();
        }, 500);

        // Log debug info if enabled
        if (CONFIG.debug) {
            this.logDebugInfo();
        }
    }

    handleResize() {
        // Adjust snowfall container
        this.snowfall.stop();
        this.snowfall.start();

        // Ensure proper scroll position
        this.dom.scrollToBottom();
    }

    handleError(error) {
        console.error('Application error:', error);
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #ff5f57;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            z-index: 1000;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
        `;
        
        errorElement.innerHTML = `
            <h3 style="margin-bottom: 10px;">Oops! Something went wrong</h3>
            <p style="margin-bottom: 15px;">Please try refreshing the page. If the problem persists, check the console for details.</p>
            <button onclick="location.reload()" style="
                background: white;
                color: #ff5f57;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            ">Refresh Page</button>
        `;

        // Add to document
        document.body.appendChild(errorElement);
    }

    logDebugInfo() {
        console.log('Debug Information:');
        console.log('Configuration:', CONFIG);
        console.log('DOM Elements:', this.dom.elements);
        console.log('Typing Engine State:', this.typing.state);
        console.log('Audio State:', this.audio.isPlaying);
        console.log('Active Snowflakes:', this.snowfall.snowflakes.size);
    }
}

/******************************************************
 * 9) START APPLICATION
 ******************************************************/
// Ensure DOM is fully loaded before starting
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new App());
} else {
    new App();
}

// Handle global errors
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    event.preventDefault();
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});