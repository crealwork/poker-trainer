const Cards = (() => {
    const SUITS = {
        spade: '\u2660',
        heart: '\u2665',
        diamond: '\u2666',
        club: '\u2663'
    };

    const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const HAND_NAMES = {
        royal_flush: '\uB85C\uC584 \uD50C\uB7EC\uC2DC',
        straight_flush: '\uC2A4\uD2B8\uB808\uC774\uD2B8 \uD50C\uB7EC\uC2DC',
        four_of_a_kind: '\uD3EC\uCE74\uB4DC (Four of a Kind)',
        full_house: '\uD480\uD558\uC6B0\uC2A4',
        flush: '\uD50C\uB7EC\uC2DC',
        straight: '\uC2A4\uD2B8\uB808\uC774\uD2B8',
        three_of_a_kind: '\uD2B8\uB9AC\uD50C (Three of a Kind)',
        two_pair: '\uD22C \uD398\uC5B4',
        one_pair: '\uC6D0 \uD398\uC5B4',
        high_card: '\uD558\uC774 \uCE74\uB4DC'
    };

    const HAND_RANKS = {
        royal_flush: 10,
        straight_flush: 9,
        four_of_a_kind: 8,
        full_house: 7,
        flush: 6,
        straight: 5,
        three_of_a_kind: 4,
        two_pair: 3,
        one_pair: 2,
        high_card: 1
    };

    function createCard(rank, suit, faceUp = true) {
        const suitSymbol = SUITS[suit];
        const isRed = suit === 'heart' || suit === 'diamond';

        const card = document.createElement('div');
        card.className = 'card';
        if (isRed) card.classList.add('card--red');
        if (!faceUp) card.classList.add('card--flipped');
        card.setAttribute('data-rank', rank);
        card.setAttribute('data-suit', suit);

        const inner = document.createElement('div');
        inner.className = 'card__inner';

        const front = document.createElement('div');
        front.className = 'card__front';

        const rankTop = document.createElement('div');
        rankTop.className = 'card__rank';
        rankTop.textContent = rank;

        const suitCenter = document.createElement('div');
        suitCenter.className = 'card__suit';
        suitCenter.textContent = suitSymbol;

        const rankBottom = document.createElement('div');
        rankBottom.className = 'card__rank-bottom';
        rankBottom.textContent = rank;

        front.appendChild(rankTop);
        front.appendChild(suitCenter);
        front.appendChild(rankBottom);

        const back = document.createElement('div');
        back.className = 'card__back';

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        return card;
    }

    function createHand(cards, options = {}) {
        const { faceUp = true, spread = false, community = false } = options;

        const hand = document.createElement('div');
        hand.className = 'hand';
        if (spread) hand.classList.add('hand--spread');
        if (community) hand.classList.add('hand--community');

        cards.forEach(({ rank, suit }) => {
            const cardEl = createCard(rank, suit, faceUp);
            hand.appendChild(cardEl);
        });

        return hand;
    }

    function flipCard(cardEl) {
        cardEl.classList.toggle('card--flipped');
        return cardEl;
    }

    function createDeck() {
        const deck = [];
        const suitKeys = Object.keys(SUITS);
        for (const suit of suitKeys) {
            for (const rank of RANKS) {
                deck.push({ rank, suit });
            }
        }
        return deck;
    }

    function getHandName(handType) { return HAND_NAMES[handType]; }
    function getHandRank(handType) { return HAND_RANKS[handType]; }
    function getSuitSymbol(suit) { return SUITS[suit]; }
    function getSuitColor(suit) { return (suit === 'heart' || suit === 'diamond') ? 'red' : 'black'; }

    return {
        createCard, createHand, flipCard, createDeck,
        getHandName, getHandRank, getSuitSymbol, getSuitColor,
        SUITS, RANKS
    };
})();
