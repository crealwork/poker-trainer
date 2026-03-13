const Lessons = (() => {
    const lessons = [
        // ===== Lesson 1: 카드와 족보 =====
        {
            id: 1,
            title: '카드와 족보',
            icon: '🃏',
            sections: [
                {
                    type: 'text',
                    title: '52장 카드 구성',
                    content: '포커는 52장의 카드로 플레이합니다. 카드는 4가지 문양으로 나뉘며, 각 문양마다 13장의 카드가 있습니다.<br><br>' +
                        '<strong>4가지 문양:</strong><br>' +
                        '♠ 스페이드 (검은색)<br>' +
                        '♥ 하트 (빨간색)<br>' +
                        '♦ 다이아몬드 (빨간색)<br>' +
                        '♣ 클로버 (검은색)<br><br>' +
                        '<strong>13장의 숫자:</strong> A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K<br><br>' +
                        'A(에이스)는 가장 높은 카드이자, 경우에 따라 가장 낮은 카드로도 사용됩니다.'
                },
                {
                    type: 'cards',
                    title: '4가지 문양 예시',
                    cards: [
                        { rank: 'A', suit: 'spade' },
                        { rank: 'A', suit: 'heart' },
                        { rank: 'A', suit: 'diamond' },
                        { rank: 'A', suit: 'club' }
                    ],
                    caption: '같은 숫자(A)라도 문양이 다릅니다. 포커에서 문양 간 우열은 없습니다.'
                },
                {
                    type: 'hand-ranking',
                    title: '핸드 랭킹 (족보)',
                    rankings: [
                        {
                            rank: 1,
                            name: '로얄 플러시',
                            handType: 'royal-flush',
                            cards: [
                                { rank: 'A', suit: 'spade' },
                                { rank: 'K', suit: 'spade' },
                                { rank: 'Q', suit: 'spade' },
                                { rank: 'J', suit: 'spade' },
                                { rank: '10', suit: 'spade' }
                            ],
                            description: '같은 문양의 10, J, Q, K, A로 이루어진 최강의 핸드'
                        },
                        {
                            rank: 2,
                            name: '스트레이트 플러시',
                            handType: 'straight-flush',
                            cards: [
                                { rank: '5', suit: 'heart' },
                                { rank: '6', suit: 'heart' },
                                { rank: '7', suit: 'heart' },
                                { rank: '8', suit: 'heart' },
                                { rank: '9', suit: 'heart' }
                            ],
                            description: '같은 문양의 연속된 숫자 5장'
                        },
                        {
                            rank: 3,
                            name: '포카드',
                            handType: 'four-of-a-kind',
                            cards: [
                                { rank: 'K', suit: 'spade' },
                                { rank: 'K', suit: 'heart' },
                                { rank: 'K', suit: 'diamond' },
                                { rank: 'K', suit: 'club' },
                                { rank: '3', suit: 'spade' }
                            ],
                            description: '같은 숫자 4장으로 이루어진 핸드'
                        },
                        {
                            rank: 4,
                            name: '풀하우스',
                            handType: 'full-house',
                            cards: [
                                { rank: 'Q', suit: 'spade' },
                                { rank: 'Q', suit: 'heart' },
                                { rank: 'Q', suit: 'diamond' },
                                { rank: '8', suit: 'club' },
                                { rank: '8', suit: 'spade' }
                            ],
                            description: '같은 숫자 3장 + 같은 숫자 2장의 조합'
                        },
                        {
                            rank: 5,
                            name: '플러시',
                            handType: 'flush',
                            cards: [
                                { rank: '2', suit: 'diamond' },
                                { rank: '5', suit: 'diamond' },
                                { rank: '8', suit: 'diamond' },
                                { rank: 'J', suit: 'diamond' },
                                { rank: 'A', suit: 'diamond' }
                            ],
                            description: '같은 문양 5장 (숫자는 상관없음)'
                        },
                        {
                            rank: 6,
                            name: '스트레이트',
                            handType: 'straight',
                            cards: [
                                { rank: '4', suit: 'spade' },
                                { rank: '5', suit: 'heart' },
                                { rank: '6', suit: 'diamond' },
                                { rank: '7', suit: 'club' },
                                { rank: '8', suit: 'spade' }
                            ],
                            description: '연속된 숫자 5장 (문양은 상관없음)'
                        },
                        {
                            rank: 7,
                            name: '트리플',
                            handType: 'three-of-a-kind',
                            cards: [
                                { rank: '9', suit: 'spade' },
                                { rank: '9', suit: 'heart' },
                                { rank: '9', suit: 'diamond' },
                                { rank: '5', suit: 'club' },
                                { rank: '2', suit: 'spade' }
                            ],
                            description: '같은 숫자 3장으로 이루어진 핸드'
                        },
                        {
                            rank: 8,
                            name: '투 페어',
                            handType: 'two-pair',
                            cards: [
                                { rank: 'J', suit: 'spade' },
                                { rank: 'J', suit: 'heart' },
                                { rank: '7', suit: 'diamond' },
                                { rank: '7', suit: 'club' },
                                { rank: 'A', suit: 'spade' }
                            ],
                            description: '같은 숫자 2장이 2쌍인 핸드'
                        },
                        {
                            rank: 9,
                            name: '원 페어',
                            handType: 'one-pair',
                            cards: [
                                { rank: '10', suit: 'spade' },
                                { rank: '10', suit: 'heart' },
                                { rank: 'A', suit: 'diamond' },
                                { rank: '8', suit: 'club' },
                                { rank: '3', suit: 'spade' }
                            ],
                            description: '같은 숫자 2장이 1쌍인 핸드'
                        },
                        {
                            rank: 10,
                            name: '하이 카드',
                            handType: 'high-card',
                            cards: [
                                { rank: 'A', suit: 'spade' },
                                { rank: 'J', suit: 'heart' },
                                { rank: '8', suit: 'diamond' },
                                { rank: '5', suit: 'club' },
                                { rank: '2', suit: 'spade' }
                            ],
                            description: '아무 조합도 없을 때, 가장 높은 카드로 승부'
                        }
                    ]
                },
                {
                    type: 'text',
                    title: '족보 기억 팁',
                    content: '처음에는 10가지 족보를 다 외우기 어려울 수 있어요. 하지만 걱정하지 마세요!<br><br>' +
                        '<strong>실전에서 가장 많이 나오는 것은 하이 카드와 원 페어입니다!</strong><br><br>' +
                        '로얄 플러시나 스트레이트 플러시는 매우 드물게 나옵니다. ' +
                        '자주 나오는 순서대로 먼저 익히면 됩니다:<br>' +
                        '1. 하이 카드 (가장 흔함)<br>' +
                        '2. 원 페어<br>' +
                        '3. 투 페어<br>' +
                        '4. 트리플<br>' +
                        '5. 스트레이트 / 플러시 (간혹 등장)<br>' +
                        '6. 풀하우스 이상 (드물게 등장)'
                }
            ],
            quiz: [
                {
                    question: '다음 중 가장 강한 핸드는?',
                    options: ['원 페어', '플러시', '스트레이트', '투 페어'],
                    correct: 1,
                    explanation: '플러시(같은 문양 5장)는 스트레이트, 투 페어, 원 페어보다 강합니다. 핸드 랭킹에서 5위에 해당합니다.'
                },
                {
                    question: '풀하우스는 어떤 조합인가요?',
                    options: ['같은 숫자 3장 + 같은 숫자 2장', '같은 문양 5장', '연속된 숫자 5장', '같은 숫자 4장'],
                    correct: 0,
                    explanation: '풀하우스는 같은 숫자 3장(트리플)과 같은 숫자 2장(페어)의 조합입니다. 예: Q-Q-Q-8-8'
                },
                {
                    question: '포카드와 풀하우스 중 더 강한 것은?',
                    options: ['풀하우스', '포카드', '같다', '상황에 따라 다르다'],
                    correct: 1,
                    explanation: '포카드(같은 숫자 4장)는 풀하우스보다 강합니다. 핸드 랭킹에서 포카드는 3위, 풀하우스는 4위입니다.'
                },
                {
                    question: 'A♠ K♠ Q♠ J♠ 10♠는 어떤 족보인가요?',
                    options: ['스트레이트', '플러시', '로얄 플러시', '스트레이트 플러시'],
                    correct: 2,
                    explanation: '같은 문양(스페이드)의 A, K, Q, J, 10은 로얄 플러시입니다. 포커에서 가장 강력한 최고의 핸드입니다!'
                },
                {
                    question: '다음 중 가장 약한 핸드는?',
                    options: ['원 페어', '하이 카드', '투 페어', '트리플'],
                    correct: 1,
                    explanation: '하이 카드는 아무 조합도 없는 상태로, 가장 약한 핸드입니다. 가장 높은 카드 한 장으로만 승부합니다.'
                }
            ]
        },

        // ===== Lesson 2: 게임 진행 순서 =====
        {
            id: 2,
            title: '게임 진행 순서',
            icon: '🎯',
            sections: [
                {
                    type: 'text',
                    title: '텍사스 홀덤 기본 구조',
                    content: '텍사스 홀덤은 세계에서 가장 인기 있는 포커 게임입니다.<br><br>' +
                        '각 플레이어는 <strong>2장의 개인 카드(홀 카드)</strong>를 받고, ' +
                        '테이블에 <strong>5장의 공유 카드(커뮤니티 카드)</strong>가 공개됩니다.<br><br>' +
                        '이 7장 중에서 <strong>최고의 5장 조합</strong>을 만들어 승부합니다!'
                },
                {
                    type: 'text',
                    title: '프리플랍 (Pre-flop)',
                    content: '게임의 첫 번째 단계입니다.<br><br>' +
                        '각 플레이어에게 <strong>2장의 홀 카드</strong>가 나눠집니다. 이 카드는 본인만 볼 수 있습니다.<br><br>' +
                        '카드를 확인한 후, 첫 번째 베팅 라운드가 진행됩니다. ' +
                        '좋은 카드를 받았다면 계속 플레이하고, 나쁜 카드라면 폴드할 수 있습니다.'
                },
                {
                    type: 'cards',
                    title: '홀 카드 예시',
                    cards: [
                        { rank: 'A', suit: 'heart' },
                        { rank: 'K', suit: 'heart' }
                    ],
                    caption: '이것이 당신의 홀 카드입니다'
                },
                {
                    type: 'text',
                    title: '플랍 (Flop)',
                    content: '프리플랍 베팅이 끝나면, 테이블에 <strong>3장의 커뮤니티 카드</strong>가 동시에 공개됩니다.<br><br>' +
                        '이 카드는 모든 플레이어가 공유합니다. 내 홀 카드 2장과 플랍 카드 3장을 조합하여 핸드를 만듭니다.<br><br>' +
                        '플랍 이후 두 번째 베팅 라운드가 진행됩니다.'
                },
                {
                    type: 'cards',
                    title: '플랍 예시',
                    cards: [
                        { rank: '10', suit: 'heart' },
                        { rank: 'J', suit: 'spade' },
                        { rank: 'Q', suit: 'diamond' }
                    ],
                    caption: '플랍에 공개된 3장의 커뮤니티 카드'
                },
                {
                    type: 'text',
                    title: '턴 (Turn)',
                    content: '플랍 베팅이 끝나면, <strong>4번째 커뮤니티 카드</strong>가 공개됩니다.<br><br>' +
                        '이제 커뮤니티 카드가 4장이 되었습니다. 내 핸드가 더 좋아졌는지 확인하세요!<br><br>' +
                        '세 번째 베팅 라운드가 진행됩니다.'
                },
                {
                    type: 'cards',
                    title: '턴 카드',
                    cards: [
                        { rank: '2', suit: 'club' }
                    ],
                    caption: '턴에 추가된 4번째 카드'
                },
                {
                    type: 'text',
                    title: '리버 (River)',
                    content: '턴 베팅이 끝나면, <strong>5번째이자 마지막 커뮤니티 카드</strong>가 공개됩니다.<br><br>' +
                        '이제 모든 카드가 공개되었습니다! 내 홀 카드 2장과 커뮤니티 카드 5장, 총 7장 중 최고의 5장을 선택합니다.<br><br>' +
                        '마지막 베팅 라운드가 진행됩니다.'
                },
                {
                    type: 'cards',
                    title: '리버 카드',
                    cards: [
                        { rank: '8', suit: 'spade' }
                    ],
                    caption: '리버에 추가된 마지막 카드'
                },
                {
                    type: 'text',
                    title: '쇼다운 (Showdown)',
                    content: '마지막 베팅 라운드가 끝나면, 남은 플레이어들이 카드를 공개합니다.<br><br>' +
                        '<strong>7장(홀 카드 2장 + 커뮤니티 카드 5장) 중 최고의 5장 조합</strong>으로 승패를 결정합니다.<br><br>' +
                        '가장 높은 족보를 가진 플레이어가 팟(베팅된 모든 칩)을 가져갑니다!<br><br>' +
                        '만약 베팅 라운드 중 한 명을 제외한 모든 플레이어가 폴드하면, 남은 플레이어가 자동으로 팟을 가져갑니다.'
                }
            ],
            quiz: [
                {
                    question: '텍사스 홀덤에서 각 플레이어가 받는 개인 카드는 몇 장인가요?',
                    options: ['1장', '2장', '3장', '5장'],
                    correct: 1,
                    explanation: '텍사스 홀덤에서 각 플레이어는 2장의 개인 카드(홀 카드)를 받습니다. 이 카드는 본인만 볼 수 있습니다.'
                },
                {
                    question: '플랍에서 공개되는 커뮤니티 카드는 몇 장인가요?',
                    options: ['1장', '2장', '3장', '4장'],
                    correct: 2,
                    explanation: '플랍에서는 3장의 커뮤니티 카드가 동시에 공개됩니다. 이후 턴과 리버에서 각각 1장씩 추가됩니다.'
                },
                {
                    question: '게임 진행 순서로 올바른 것은?',
                    options: ['플랍→프리플랍→턴→리버', '프리플랍→플랍→턴→리버', '프리플랍→턴→플랍→리버', '플랍→턴→리버→프리플랍'],
                    correct: 1,
                    explanation: '올바른 순서는 프리플랍(홀 카드 배분) → 플랍(3장 공개) → 턴(4번째 공개) → 리버(5번째 공개)입니다.'
                },
                {
                    question: '쇼다운에서 최고의 핸드를 만들기 위해 사용하는 총 카드 수는?',
                    options: ['2장 (홀 카드만)', '5장 (커뮤니티만)', '7장 중 최고 5장', '7장 모두'],
                    correct: 2,
                    explanation: '홀 카드 2장 + 커뮤니티 카드 5장 = 총 7장 중에서 가장 좋은 5장 조합을 선택하여 승부합니다.'
                }
            ]
        },

        // ===== Lesson 3: 베팅 액션 =====
        {
            id: 3,
            title: '베팅 액션',
            icon: '💰',
            sections: [
                {
                    type: 'text',
                    title: '베팅의 기본 개념',
                    content: '포커에서 베팅은 게임의 핵심입니다.<br><br>' +
                        '각 베팅 라운드에서 플레이어는 <strong>팟(pot)에 칩을 넣거나, 게임에서 빠지는 행동</strong>을 합니다.<br><br>' +
                        '어떤 액션을 선택하느냐에 따라 승패가 결정됩니다. 총 5가지 기본 액션이 있습니다.'
                },
                {
                    type: 'text',
                    title: '폴드 (Fold)',
                    content: '<strong>카드를 버리고 해당 핸드를 포기합니다.</strong><br><br>' +
                        '핸드가 나쁘거나, 상대의 베팅이 너무 클 때 사용합니다.<br><br>' +
                        '⚠️ 중요: 이미 베팅한 칩은 돌려받을 수 없습니다! 폴드하면 그 핸드에서 완전히 빠지게 됩니다.'
                },
                {
                    type: 'text',
                    title: '체크 (Check)',
                    content: '<strong>베팅하지 않고 다음 플레이어에게 차례를 넘깁니다.</strong><br><br>' +
                        '아무도 베팅하지 않았을 때만 가능합니다. 누군가 이미 베팅했다면 체크할 수 없고, 콜/레이즈/폴드 중 선택해야 합니다.<br><br>' +
                        '아직 상황을 지켜보고 싶을 때 유용한 액션입니다.'
                },
                {
                    type: 'text',
                    title: '콜 (Call)',
                    content: '<strong>이전 플레이어의 베팅과 같은 금액을 넣습니다.</strong><br><br>' +
                        '게임에 계속 참여하기 위한 최소한의 행동입니다.<br><br>' +
                        '예: 상대가 100을 베팅했다면, 나도 100을 넣어야 계속 플레이할 수 있습니다.'
                },
                {
                    type: 'text',
                    title: '레이즈 (Raise)',
                    content: '<strong>이전 베팅보다 더 큰 금액을 베팅합니다.</strong><br><br>' +
                        '다른 플레이어들에게 압박을 주는 공격적인 행동입니다. 좋은 핸드가 있을 때 팟을 키우거나, 상대를 폴드시키고 싶을 때 사용합니다.<br><br>' +
                        '예: 상대가 100을 베팅했을 때, 300으로 레이즈하면 다른 플레이어들은 300을 내야 계속 참여할 수 있습니다.'
                },
                {
                    type: 'text',
                    title: '올인 (All-in)',
                    content: '<strong>가지고 있는 모든 칩을 베팅합니다.</strong><br><br>' +
                        '올인 후에는 더 이상 추가 베팅이 불가능하며, 쇼다운까지 기다려야 합니다.<br><br>' +
                        '매우 강한 핸드가 있을 때, 또는 남은 칩이 적어서 어쩔 수 없을 때 사용합니다. 짜릿하지만 위험한 액션입니다!'
                },
                {
                    type: 'text',
                    title: '베팅 액션 요약',
                    content: '<table style="width:100%; border-collapse:collapse; margin-top:10px;">' +
                        '<tr style="background:#2d5a3d; color:white;"><th style="padding:8px; border:1px solid #444;">액션</th><th style="padding:8px; border:1px solid #444;">설명</th><th style="padding:8px; border:1px solid #444;">언제 사용?</th></tr>' +
                        '<tr><td style="padding:8px; border:1px solid #444;"><strong>폴드</strong></td><td style="padding:8px; border:1px solid #444;">카드 버리고 포기</td><td style="padding:8px; border:1px solid #444;">핸드가 나쁠 때</td></tr>' +
                        '<tr><td style="padding:8px; border:1px solid #444;"><strong>체크</strong></td><td style="padding:8px; border:1px solid #444;">베팅 없이 넘기기</td><td style="padding:8px; border:1px solid #444;">아무도 베팅 안 했을 때</td></tr>' +
                        '<tr><td style="padding:8px; border:1px solid #444;"><strong>콜</strong></td><td style="padding:8px; border:1px solid #444;">같은 금액 베팅</td><td style="padding:8px; border:1px solid #444;">게임에 계속 참여하고 싶을 때</td></tr>' +
                        '<tr><td style="padding:8px; border:1px solid #444;"><strong>레이즈</strong></td><td style="padding:8px; border:1px solid #444;">더 큰 금액 베팅</td><td style="padding:8px; border:1px solid #444;">좋은 핸드로 압박할 때</td></tr>' +
                        '<tr><td style="padding:8px; border:1px solid #444;"><strong>올인</strong></td><td style="padding:8px; border:1px solid #444;">모든 칩 베팅</td><td style="padding:8px; border:1px solid #444;">매우 강한 핸드 또는 마지막 승부</td></tr>' +
                        '</table>'
                }
            ],
            quiz: [
                {
                    question: '아무도 베팅하지 않았을 때 할 수 있는 액션은?',
                    options: ['콜', '체크', '폴드만 가능', '레이즈만 가능'],
                    correct: 1,
                    explanation: '아무도 베팅하지 않았을 때는 체크(베팅 없이 넘기기)를 할 수 있습니다. 물론 베팅을 시작하거나 폴드할 수도 있습니다.'
                },
                {
                    question: '상대가 100을 베팅했을 때, 게임에 계속 참여하려면?',
                    options: ['체크', '100을 콜', '폴드', '아무것도 안 해도 됨'],
                    correct: 1,
                    explanation: '상대가 베팅한 금액과 같은 100을 콜해야 게임에 계속 참여할 수 있습니다. 더 높은 금액으로 레이즈할 수도 있습니다.'
                },
                {
                    question: '폴드하면 어떻게 되나요?',
                    options: ['베팅한 칩을 돌려받는다', '카드를 버리고 해당 핸드를 포기한다', '다음 라운드에서 다시 참여할 수 있다', '자동으로 콜된다'],
                    correct: 1,
                    explanation: '폴드하면 카드를 버리고 해당 핸드를 완전히 포기합니다. 이미 베팅한 칩은 돌려받을 수 없습니다.'
                },
                {
                    question: '올인의 의미는?',
                    options: ['1칩만 베팅', '가진 칩의 절반 베팅', '가진 칩 전부 베팅', '게임 포기'],
                    correct: 2,
                    explanation: '올인은 가지고 있는 모든 칩을 베팅하는 것입니다. 올인 후에는 추가 베팅이 불가능하며 쇼다운까지 기다립니다.'
                }
            ]
        },

        // ===== Lesson 4: 포지션과 블라인드 =====
        {
            id: 4,
            title: '포지션과 블라인드',
            icon: '🪑',
            sections: [
                {
                    type: 'text',
                    title: '포지션이란?',
                    content: '포지션은 <strong>테이블에서 앉은 위치</strong>를 말합니다.<br><br>' +
                        '포커에서는 늦게 행동할수록 유리합니다! 왜냐하면 다른 플레이어들의 행동을 먼저 보고 결정할 수 있기 때문입니다.<br><br>' +
                        '같은 카드를 가지고 있어도, 포지션에 따라 플레이 방법이 달라질 수 있습니다.'
                },
                {
                    type: 'text',
                    title: '딜러 버튼 (D)',
                    content: '<strong>딜러 버튼</strong>은 현재 딜러 위치를 표시하는 마커입니다.<br><br>' +
                        '매 핸드마다 시계 방향으로 한 자리씩 이동합니다.<br><br>' +
                        '딜러 왼쪽에 앉은 플레이어부터 베팅이 시작됩니다. 딜러 버튼 위치의 플레이어가 가장 마지막에 행동합니다.'
                },
                {
                    type: 'text',
                    title: '스몰 블라인드 (SB)',
                    content: '<strong>딜러 바로 왼쪽</strong>에 앉은 플레이어입니다.<br><br>' +
                        '카드를 받기 전에 <strong>강제로 작은 금액을 베팅</strong>해야 합니다.<br><br>' +
                        '예: 블라인드가 50/100인 게임에서 스몰 블라인드는 50을 냅니다.'
                },
                {
                    type: 'text',
                    title: '빅 블라인드 (BB)',
                    content: '<strong>스몰 블라인드 바로 왼쪽</strong>에 앉은 플레이어입니다.<br><br>' +
                        '카드를 받기 전에 <strong>강제로 큰 금액을 베팅</strong>해야 합니다. 보통 스몰 블라인드의 2배입니다.<br><br>' +
                        '예: 블라인드가 50/100인 게임에서 빅 블라인드는 100을 냅니다.<br><br>' +
                        '블라인드가 있는 이유: 매 핸드마다 팟에 칩이 쌓이도록 하여 액션을 유도합니다!'
                },
                {
                    type: 'text',
                    title: '포지션 분류',
                    content: '<strong>얼리 포지션 (Early Position)</strong><br>' +
                        '- UTG (Under The Gun): 빅 블라인드 바로 왼쪽, <strong>가장 먼저 행동</strong><br>' +
                        '- 정보가 가장 적으므로 강한 핸드만 플레이 권장<br><br>' +
                        '<strong>미들 포지션 (Middle Position)</strong><br>' +
                        '- 얼리와 레이트 사이<br>' +
                        '- 약간 더 넓은 범위의 핸드 플레이 가능<br><br>' +
                        '<strong>레이트 포지션 (Late Position)</strong><br>' +
                        '- 컷오프 (CO): 딜러 바로 오른쪽<br>' +
                        '- 버튼 (BTN): 딜러 위치, <strong>가장 마지막에 행동</strong><br>' +
                        '- 가장 유리한 포지션!'
                },
                {
                    type: 'text',
                    title: '왜 레이트 포지션이 유리한가?',
                    content: '레이트 포지션(특히 버튼)이 유리한 이유는 간단합니다:<br><br>' +
                        '<strong>다른 플레이어들의 행동을 먼저 관찰하고 결정할 수 있기 때문입니다!</strong><br><br>' +
                        '- 상대가 체크하면 → 약한 핸드일 가능성이 높음<br>' +
                        '- 상대가 레이즈하면 → 강한 핸드일 가능성이 높음<br><br>' +
                        '이런 정보를 바탕으로 더 좋은 결정을 내릴 수 있습니다. 포지션은 포커에서 가장 중요한 요소 중 하나입니다!'
                }
            ],
            quiz: [
                {
                    question: '블라인드를 내야 하는 플레이어는?',
                    options: ['딜러만', '스몰 블라인드와 빅 블라인드', '모든 플레이어', '첫 번째 플레이어만'],
                    correct: 1,
                    explanation: '매 핸드마다 스몰 블라인드와 빅 블라인드 위치의 플레이어 2명이 강제로 블라인드를 냅니다.'
                },
                {
                    question: '가장 유리한 포지션은?',
                    options: ['얼리 포지션 (UTG)', '미들 포지션', '빅 블라인드', '레이트 포지션 (버튼)'],
                    correct: 3,
                    explanation: '레이트 포지션(버튼)이 가장 유리합니다. 다른 플레이어들의 행동을 모두 확인한 후 결정할 수 있기 때문입니다.'
                },
                {
                    question: '빅 블라인드가 100일 때, 스몰 블라인드는 보통 얼마인가요?',
                    options: ['25', '50', '100', '200'],
                    correct: 1,
                    explanation: '스몰 블라인드는 보통 빅 블라인드의 절반입니다. 빅 블라인드가 100이면 스몰 블라인드는 50입니다.'
                }
            ]
        },

        // ===== Lesson 5: 스타팅 핸드 =====
        {
            id: 5,
            title: '스타팅 핸드',
            icon: '✋',
            sections: [
                {
                    type: 'text',
                    title: '스타팅 핸드의 중요성',
                    content: '모든 홀 카드 조합이 같은 가치가 아닙니다!<br><br>' +
                        '<strong>어떤 카드로 시작하느냐가 승률에 큰 영향을 미칩니다.</strong><br><br>' +
                        '좋은 스타팅 핸드를 선택하는 것은 포커의 가장 기본적이고 중요한 기술입니다. ' +
                        '나쁜 카드로 게임에 참여하면 돈을 잃을 확률이 매우 높습니다.'
                },
                {
                    type: 'text',
                    title: '프리미엄 핸드 (무조건 플레이!)',
                    content: '이 핸드들은 매우 강력합니다. 어떤 포지션에서든 플레이하세요!<br><br>' +
                        '<strong>AA</strong> - 에이스 페어 (포켓 에이스, "불릿")<br>' +
                        '<strong>KK</strong> - 킹 페어 (포켓 킹, "카우보이")<br>' +
                        '<strong>QQ</strong> - 퀸 페어 (포켓 퀸, "레이디")<br>' +
                        '<strong>AKs</strong> - 에이스 킹 수티드 (같은 문양)<br><br>' +
                        '<em>s = suited (같은 문양) - 플러시 가능성이 있어 더 강력!</em>'
                },
                {
                    type: 'cards',
                    title: '프리미엄 핸드 예시',
                    cards: [
                        { rank: 'A', suit: 'spade' },
                        { rank: 'A', suit: 'heart' }
                    ],
                    caption: '에이스 페어 - 가장 강력한 스타팅 핸드'
                },
                {
                    type: 'text',
                    title: '좋은 핸드 (대부분 플레이)',
                    content: '프리미엄만큼은 아니지만, 충분히 강한 핸드들입니다:<br><br>' +
                        '<strong>JJ</strong> - 잭 페어<br>' +
                        '<strong>10-10</strong> - 텐 페어<br>' +
                        '<strong>AQs</strong> - 에이스 퀸 수티드<br>' +
                        '<strong>AJs</strong> - 에이스 잭 수티드<br>' +
                        '<strong>KQs</strong> - 킹 퀸 수티드<br><br>' +
                        '대부분의 상황에서 플레이할 가치가 있습니다.'
                },
                {
                    type: 'text',
                    title: '괜찮은 핸드 (포지션에 따라)',
                    content: '포지션이 좋을 때(레이트 포지션) 플레이할 수 있는 핸드들입니다:<br><br>' +
                        '<strong>AKo</strong> - 에이스 킹 오프수트 (o = 다른 문양)<br>' +
                        '<strong>99 ~ 77</strong> - 미들 페어<br>' +
                        '<strong>AJo</strong> - 에이스 잭 오프수트<br>' +
                        '<strong>KJs</strong> - 킹 잭 수티드<br>' +
                        '<strong>QJs</strong> - 퀸 잭 수티드<br><br>' +
                        '얼리 포지션에서는 주의해서 플레이하세요.'
                },
                {
                    type: 'text',
                    title: '폴드 권장 핸드',
                    content: '이런 핸드는 거의 항상 폴드하는 것이 좋습니다!<br><br>' +
                        '<strong>72o</strong> - 7과 2 오프수트 = <strong>최악의 핸드!</strong><br>' +
                        '낮은 숫자 + 연결되지 않는 조합 (예: 9-3, 8-2, J-4 등)<br><br>' +
                        '이런 핸드로 플레이하면 장기적으로 반드시 손해를 봅니다.'
                },
                {
                    type: 'cards',
                    title: '최악의 핸드 예시',
                    cards: [
                        { rank: '7', suit: 'spade' },
                        { rank: '2', suit: 'diamond' }
                    ],
                    caption: '최악의 스타팅 핸드 - 거의 항상 폴드!'
                },
                {
                    type: 'text',
                    title: '초보자 팁',
                    content: '스타팅 핸드 선택에 대한 가장 중요한 조언:<br><br>' +
                        '<strong>의심되면 폴드하세요!</strong><br><br>' +
                        '좋은 핸드가 올 때까지 기다리는 것이 가장 좋은 전략입니다. ' +
                        '초보자가 가장 많이 하는 실수는 너무 많은 핸드를 플레이하는 것입니다.<br><br>' +
                        '인내심을 가지세요. 좋은 카드가 오면 공격적으로 플레이하면 됩니다!'
                }
            ],
            quiz: [
                {
                    question: '다음 중 가장 강력한 스타팅 핸드는?',
                    options: ['K♠ Q♥', 'A♠ A♥', 'J♠ 10♠', 'A♦ K♣'],
                    correct: 1,
                    explanation: 'A♠ A♥(에이스 페어)는 텍사스 홀덤에서 가장 강력한 스타팅 핸드입니다. "포켓 에이스" 또는 "불릿"이라고 불립니다.'
                },
                {
                    question: '\'AKs\'에서 \'s\'는 무엇을 의미하나요?',
                    options: ['스페이드', '스트레이트', '같은 문양 (Suited)', '스트롱'],
                    correct: 2,
                    explanation: 's는 Suited(수티드), 즉 같은 문양이라는 뜻입니다. 같은 문양이면 플러시를 만들 가능성이 있어 더 강력합니다.'
                },
                {
                    question: '초보자가 가장 피해야 할 스타팅 핸드는?',
                    options: ['A♠ K♠', 'Q♠ Q♥', '7♠ 2♦', 'J♠ 10♠'],
                    correct: 2,
                    explanation: '7♠ 2♦는 텍사스 홀덤에서 최악의 스타팅 핸드입니다. 숫자가 낮고, 서로 연결되지 않으며, 문양도 다릅니다.'
                },
                {
                    question: '포지션이 좋을 때(레이트) 더 많은 핸드를 플레이할 수 있는 이유는?',
                    options: ['카드가 더 좋아서', '블라인드가 싸서', '다른 플레이어의 행동을 보고 결정할 수 있어서', '딜러가 좋은 카드를 주어서'],
                    correct: 2,
                    explanation: '레이트 포지션에서는 다른 플레이어들의 행동을 먼저 관찰할 수 있기 때문에, 더 정확한 판단이 가능합니다.'
                }
            ]
        },

        // ===== Lesson 6: 기초 전략 =====
        {
            id: 6,
            title: '기초 전략',
            icon: '🧠',
            sections: [
                {
                    type: 'text',
                    title: '타이트-어그레시브 (TAG) 스타일',
                    content: '초보자에게 가장 추천하는 플레이 스타일은 <strong>타이트-어그레시브(TAG)</strong>입니다!<br><br>' +
                        '<strong>좋은 핸드만 플레이하되, 플레이할 때는 공격적으로!</strong><br><br>' +
                        '이 스타일은 위험을 줄이면서도 좋은 기회를 최대한 활용하는 전략입니다.'
                },
                {
                    type: 'text',
                    title: '타이트 + 어그레시브',
                    content: '<strong>타이트 (Tight)</strong> = 적은 핸드에만 참여<br>' +
                        '- 전체 핸드의 상위 15~20%만 플레이<br>' +
                        '- 나쁜 핸드는 과감하게 폴드<br>' +
                        '- 기다림의 미학!<br><br>' +
                        '<strong>어그레시브 (Aggressive)</strong> = 콜보다 레이즈 선호<br>' +
                        '- 좋은 핸드가 오면 적극적으로 베팅<br>' +
                        '- 수동적으로 콜만 하지 않기<br>' +
                        '- 상대에게 압박을 주어 실수를 유도!'
                },
                {
                    type: 'text',
                    title: '팟 오즈 기초',
                    content: '<strong>팟 오즈(Pot Odds)</strong>는 콜할 가치가 있는지 판단하는 간단한 계산법입니다.<br><br>' +
                        '<strong>이길 확률 vs 콜해야 하는 금액</strong>을 비교합니다.<br><br>' +
                        '예시: 팟이 300이고 콜 비용이 100이라면?<br>' +
                        '- 총 팟: 300 + 100 = 400<br>' +
                        '- 내가 내는 금액: 100<br>' +
                        '- 필요한 승률: 100 ÷ 400 = 25%<br><br>' +
                        '<strong>4번 중 1번만 이기면 본전!</strong> 이길 확률이 25%보다 높다면 콜하는 것이 이득입니다.'
                },
                {
                    type: 'text',
                    title: '블러핑 기초',
                    content: '<strong>블러핑(Bluffing)</strong>은 약한 핸드로 베팅이나 레이즈를 하여 상대를 폴드시키는 전술입니다.<br><br>' +
                        '블러핑은 포커의 꽃이라고 할 수 있지만, 초보자는 주의해야 합니다!<br><br>' +
                        '<strong>초보자 블러핑 팁:</strong><br>' +
                        '- 블러핑은 최소화하세요<br>' +
                        '- 상대가 적을 때 블러핑 성공률이 높아요<br>' +
                        '- 지금은 좋은 핸드로 정직하게 플레이하는 것이 가장 좋습니다'
                },
                {
                    type: 'text',
                    title: '핵심 원칙 정리',
                    content: '포커에서 성공하기 위한 5가지 핵심 원칙을 기억하세요:<br><br>' +
                        '1. <strong>좋은 핸드만 플레이하세요</strong> (타이트)<br>' +
                        '나쁜 카드로 무리하게 참여하지 마세요.<br><br>' +
                        '2. <strong>플레이할 때는 레이즈하세요</strong> (어그레시브)<br>' +
                        '수동적인 콜보다 적극적인 레이즈가 더 효과적입니다.<br><br>' +
                        '3. <strong>포지션을 활용하세요</strong><br>' +
                        '레이트 포지션에서 더 많은 핸드를 플레이할 수 있습니다.<br><br>' +
                        '4. <strong>의심되면 폴드하세요</strong><br>' +
                        '확신이 없으면 기다리세요. 더 좋은 기회가 올 것입니다.<br><br>' +
                        '5. <strong>감정에 휘둘리지 마세요</strong> (틸트 방지)<br>' +
                        '연패하거나 나쁜 결과가 나와도 침착하게 플레이하세요. 감정적인 플레이는 큰 손해로 이어집니다!'
                }
            ],
            quiz: [
                {
                    question: '타이트-어그레시브 플레이란?',
                    options: ['많은 핸드를 조용히 플레이', '적은 핸드를 공격적으로 플레이', '모든 핸드를 체크만', '블러핑만 하기'],
                    correct: 1,
                    explanation: '타이트-어그레시브(TAG)는 적은 수의 좋은 핸드만 선택하고(타이트), 플레이할 때는 레이즈 위주로 공격적으로(어그레시브) 하는 스타일입니다.'
                },
                {
                    question: '팟이 300이고 콜 비용이 100일 때, 최소 몇 %의 승률이 필요한가요?',
                    options: ['10%', '25%', '50%', '75%'],
                    correct: 1,
                    explanation: '콜 비용 100 ÷ 총 팟(300+100=400) = 25%. 이길 확률이 25% 이상이면 콜하는 것이 수학적으로 이득입니다.'
                },
                {
                    question: '초보자에게 가장 중요한 전략 원칙은?',
                    options: ['매 핸드 블러핑하기', '의심되면 콜하기', '의심되면 폴드하기', '항상 올인하기'],
                    correct: 2,
                    explanation: '의심되면 폴드하는 것이 초보자에게 가장 중요한 원칙입니다. 좋은 기회를 기다리며 인내심을 가지세요!'
                }
            ]
        }
    ];

    function getAll() {
        return lessons;
    }

    function getById(id) {
        return lessons.find(l => l.id === id);
    }

    function getLessonCount() {
        return lessons.length;
    }

    return { getAll, getById, getLessonCount };
})();