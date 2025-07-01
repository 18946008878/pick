// 游戏数据和配置
const GameData = {
    // 角色配置
    characters: {
        yijian: {
            name: "一剑",
            description: "近战输出，掌握乾光之力",
            element: "light",
            baseStats: { strength: 20, agility: 15, intelligence: 10, constitution: 18 },
            skills: ["破天剑法", "乾坤一剑", "光明斩"]
        },
        xiuya: {
            name: "秀雅", 
            description: "远程射手，善用火系弓箭",
            element: "fire",
            baseStats: { strength: 15, agility: 20, intelligence: 15, constitution: 12 },
            skills: ["火箭术", "连环射", "爆炎箭"]
        },
        zhilu: {
            name: "指路",
            description: "灵活刺客，突进控制兼备", 
            element: "wind",
            baseStats: { strength: 15, agility: 20, intelligence: 15, constitution: 15 },
            skills: ["疾风步", "影分身", "风刃舞"]
        },
        muzhi: {
            name: "拇指",
            description: "治疗辅助，善用陷阱和天雷",
            element: "thunder",
            baseStats: { strength: 10, agility: 15, intelligence: 20, constitution: 15 },
            skills: ["治疗术", "雷电陷阱", "天雷降"]
        }
    },

    // 物品数据
    items: {
        "破天铜牌": { type: "currency", description: "普通的修炼货币" },
        "破天银牌": { type: "currency", description: "高级的修炼货币" },
        "活血丹": { type: "potion", description: "恢复100点生命值", effect: "heal", value: 100 },
        "回神丹": { type: "potion", description: "恢复50点内力", effect: "mana", value: 50 },
        "经验丹": { type: "consumable", description: "增加经验值", effect: "exp", value: 200 },
        "破天剑": { type: "weapon", description: "传说中的神剑", attack: 50 },
        "新手剑": { type: "weapon", description: "初学者使用的剑", attack: 10 }
    },

    // 敌人数据
    enemies: {
        "山贼": { name: "山贼", hp: 80, attack: 15, defense: 5, exp: 50, loot: ["破天铜牌"] },
        "野狼": { name: "野狼", hp: 60, attack: 12, defense: 3, exp: 30, loot: ["活血丹"] },
        "魔教弟子": { name: "魔教弟子", hp: 120, attack: 20, defense: 8, exp: 80, loot: ["破天银牌", "回神丹"] },
        "逆天之神使者": { name: "逆天之神使者", hp: 200, attack: 35, defense: 15, exp: 200, loot: ["经验丹", "破天银牌"] }
    },

    // 故事节点
    storyNodes: {
        start: {
            text: "你醒来时发现自己身处人极星的一个小村庄。村民们惊恐地告诉你，天空中的紫微星已经黯淡无光，整个宇宙都在逆天之神的威胁之下。作为一名武者，你决定踏上寻找三件亘古圣物的征程...",
            choices: [
                { text: "前往村长家了解详情", next: "village_chief" },
                { text: "直接出发寻找圣物", next: "forest_entrance" },
                { text: "先在村中修炼武功", next: "training_ground" }
            ]
        },
        village_chief: {
            text: "村长是一位年迈的老者，他的眼中充满了忧虑。\"年轻的武者啊，\"他缓缓说道，\"传说中有三件亘古圣物：破天剑、破天牌、破天秘笈。只有集齐这三样宝物，才能让太极八卦盘正转，击败逆天之神。但这条路充满危险...\"",
            choices: [
                { text: "询问圣物的具体位置", next: "artifacts_location" },
                { text: "请求村长的帮助", next: "village_help" },
                { text: "告辞出发冒险", next: "forest_entrance" }
            ]
        },
        artifacts_location: {
            text: "村长摇摇头：\"具体位置我也不清楚，但据古老传说，破天剑藏在午灵星的护法手中，破天牌在申灵星的神庙里，而破天秘笈则在天极星的仙人洞府。你需要乘坐古船在星际间旅行。\"",
            choices: [
                { text: "前往星际码头", next: "starport" },
                { text: "先在本星球练级", next: "forest_entrance" }
            ]
        },
        village_help: {
            text: "村长递给你一个包裹：\"这里有一些基础的丹药和一把新手剑，虽然不是什么珍贵物品，但希望能帮到你。记住，武功的修炼需要循序渐进，不可急于求成。\"",
            reward: { items: ["新手剑", "活血丹", "活血丹", "回神丹"] },
            choices: [
                { text: "感谢村长的帮助", next: "forest_entrance" }
            ]
        },
        training_ground: {
            text: "你来到村子的训练场，这里有一些木人桩和基础的修炼设施。通过练习，你感觉自己的武功有所精进。",
            reward: { exp: 100 },
            choices: [
                { text: "继续修炼", next: "training_ground" },
                { text: "离开训练场", next: "forest_entrance" }
            ]
        },
        forest_entrance: {
            text: "你走出村庄，来到一片茂密的森林前。这里是通往其他地区的必经之路，但也潜伏着各种危险。远处传来了野兽的嚎叫声...",
            choices: [
                { text: "小心地深入森林", next: "forest_deep" },
                { text: "寻找其他路径", next: "mountain_path" },
                { text: "返回村庄", next: "start" }
            ]
        },
        forest_deep: {
            text: "森林深处弥漫着神秘的雾气，你听到了脚步声。突然，一群山贼从树后跳了出来！\"留下买路钱！\"为首的山贼大喝道。",
            encounter: "山贼",
            choices: [
                { text: "与山贼战斗", action: "battle" },
                { text: "尝试交涉", next: "negotiate_bandits" },
                { text: "快速逃跑", next: "forest_entrance" }
            ]
        },
        negotiate_bandits: {
            text: "你试图与山贼讲道理，但他们显然不是善类。\"废话少说，交钱还是受死！\"看来战斗不可避免了。",
            encounter: "山贼",
            choices: [
                { text: "战斗", action: "battle" }
            ]
        },
        mountain_path: {
            text: "你选择了一条崎岖的山路。路途虽然艰难，但相对安全。在山路上，你遇到了一位修行的道士。",
            choices: [
                { text: "向道士请教武功", next: "dao_master" },
                { text: "继续前行", next: "starport" }
            ]
        },
        dao_master: {
            text: "道士看了你一眼，微笑道：\"年轻人，我看你根骨不错，愿意传授你一门基础内功心法。\"",
            reward: { skill: "基础内功", exp: 150 },
            choices: [
                { text: "感谢道士并继续前行", next: "starport" }
            ]
        },
        starport: {
            text: "你来到了星际码头，这里停泊着各种奇形怪状的古船。船长告诉你，前往其他星球需要支付船费，或者你可以尝试自己获得一艘跟斗云...",
            choices: [
                { text: "支付船费前往午灵星", next: "wuling_star", cost: "破天银牌" },
                { text: "前往申灵星", next: "shenling_star", cost: "破天银牌" },
                { text: "寻找跟斗云", next: "find_cloud" }
            ]
        }
    }
};

// 游戏状态
class GameState {
    constructor() {
        this.player = {
            name: "",
            character: null,
            level: 1,
            exp: 0,
            expToNext: 100,
            hp: 100,
            maxHp: 100,
            mp: 50,
            maxMp: 50,
            stats: { strength: 10, agility: 10, intelligence: 10, constitution: 10 },
            location: "人极星",
            inventory: {},
            skills: [],
            equipment: {}
        };
        this.currentStoryNode = "start";
        this.battleState = null;
    }

    // 初始化角色
    initializeCharacter(characterType, name) {
        const charData = GameData.characters[characterType];
        this.player.character = characterType;
        this.player.name = name;
        this.player.stats = { ...charData.baseStats };
        this.player.skills = [...charData.skills];
        this.player.maxHp = 80 + this.player.stats.constitution * 2;
        this.player.hp = this.player.maxHp;
        this.player.maxMp = 30 + this.player.stats.intelligence * 2;
        this.player.mp = this.player.maxMp;
        
        // 初始物品
        this.addItem("破天铜牌", 10);
        this.addItem("活血丹", 3);
        this.addItem("回神丹", 2);
    }

    // 添加物品
    addItem(itemName, quantity = 1) {
        if (this.player.inventory[itemName]) {
            this.player.inventory[itemName] += quantity;
        } else {
            this.player.inventory[itemName] = quantity;
        }
    }

    // 使用物品
    useItem(itemName) {
        const item = GameData.items[itemName];
        if (!item || !this.player.inventory[itemName] || this.player.inventory[itemName] <= 0) {
            return false;
        }

        switch (item.effect) {
            case "heal":
                this.player.hp = Math.min(this.player.maxHp, this.player.hp + item.value);
                break;
            case "mana":
                this.player.mp = Math.min(this.player.maxMp, this.player.mp + item.value);
                break;
            case "exp":
                this.gainExp(item.value);
                break;
        }

        this.player.inventory[itemName]--;
        if (this.player.inventory[itemName] <= 0) {
            delete this.player.inventory[itemName];
        }
        return true;
    }

    // 获得经验
    gainExp(amount) {
        this.player.exp += amount;
        while (this.player.exp >= this.player.expToNext) {
            this.levelUp();
        }
    }

    // 升级
    levelUp() {
        this.player.exp -= this.player.expToNext;
        this.player.level++;
        this.player.expToNext = Math.floor(this.player.expToNext * 1.2);
        
        // 属性成长
        this.player.stats.strength += 2;
        this.player.stats.agility += 2;
        this.player.stats.intelligence += 2;
        this.player.stats.constitution += 2;
        
        // 更新HP和MP上限
        const oldMaxHp = this.player.maxHp;
        const oldMaxMp = this.player.maxMp;
        this.player.maxHp = 80 + this.player.stats.constitution * 2;
        this.player.maxMp = 30 + this.player.stats.intelligence * 2;
        
        // 恢复部分HP和MP
        this.player.hp += (this.player.maxHp - oldMaxHp);
        this.player.mp += (this.player.maxMp - oldMaxMp);

        console.log(`升级到 ${this.player.level} 级！`);
    }

    // 战斗计算
    calculateDamage(attacker, defender) {
        const baseDamage = attacker.attack || (this.player.stats.strength + this.player.level * 2);
        const defense = defender.defense || 0;
        const damage = Math.max(1, baseDamage - defense + Math.random() * 10 - 5);
        return Math.floor(damage);
    }

    // 开始战斗
    startBattle(enemyType) {
        const enemy = { ...GameData.enemies[enemyType] };
        enemy.maxHp = enemy.hp;
        this.battleState = {
            enemy: enemy,
            playerTurn: true,
            battleLog: [`遭遇了 ${enemy.name}！`]
        };
        return this.battleState;
    }

    // 战斗回合
    battleTurn(action, data = null) {
        if (!this.battleState || !this.battleState.playerTurn) return null;

        const enemy = this.battleState.enemy;
        let result = null;

        switch (action) {
            case "attack":
                const damage = this.calculateDamage(this.player, enemy);
                enemy.hp -= damage;
                this.battleState.battleLog.push(`你对 ${enemy.name} 造成了 ${damage} 点伤害！`);
                
                if (enemy.hp <= 0) {
                    result = this.winBattle();
                } else {
                    this.battleState.playerTurn = false;
                    setTimeout(() => this.enemyTurn(), 1000);
                }
                break;

            case "skill":
                // 简化的技能系统
                if (this.player.mp >= 10) {
                    const skillDamage = this.calculateDamage(this.player, enemy) * 1.5;
                    enemy.hp -= skillDamage;
                    this.player.mp -= 10;
                    this.battleState.battleLog.push(`你使用武功对 ${enemy.name} 造成了 ${skillDamage} 点伤害！`);
                    
                    if (enemy.hp <= 0) {
                        result = this.winBattle();
                    } else {
                        this.battleState.playerTurn = false;
                        setTimeout(() => this.enemyTurn(), 1000);
                    }
                } else {
                    this.battleState.battleLog.push("内力不足！");
                }
                break;

            case "item":
                if (data && this.useItem(data)) {
                    this.battleState.battleLog.push(`使用了 ${data}！`);
                    this.battleState.playerTurn = false;
                    setTimeout(() => this.enemyTurn(), 1000);
                }
                break;

            case "flee":
                if (Math.random() > 0.3) {
                    this.battleState.battleLog.push("成功逃跑了！");
                    result = { type: "flee" };
                } else {
                    this.battleState.battleLog.push("逃跑失败！");
                    this.battleState.playerTurn = false;
                    setTimeout(() => this.enemyTurn(), 1000);
                }
                break;
        }

        return result;
    }

    // 敌人回合
    enemyTurn() {
        if (!this.battleState) return;

        const enemy = this.battleState.enemy;
        const damage = this.calculateDamage(enemy, this.player);
        this.player.hp -= damage;
        this.battleState.battleLog.push(`${enemy.name} 对你造成了 ${damage} 点伤害！`);

        if (this.player.hp <= 0) {
            this.battleState.battleLog.push("你被击败了...");
            // 简单的死亡处理：恢复一半HP，回到起始点
            this.player.hp = Math.floor(this.player.maxHp / 2);
            this.currentStoryNode = "start";
            this.battleState = null;
            game.updateDisplay();
        } else {
            this.battleState.playerTurn = true;
        }
    }

    // 战斗胜利
    winBattle() {
        const enemy = this.battleState.enemy;
        this.battleState.battleLog.push(`击败了 ${enemy.name}！`);
        
        // 获得经验和战利品
        this.gainExp(enemy.exp);
        this.battleState.battleLog.push(`获得了 ${enemy.exp} 点经验！`);

        if (enemy.loot) {
            enemy.loot.forEach(item => {
                this.addItem(item, 1);
                this.battleState.battleLog.push(`获得了 ${item}！`);
            });
        }

        this.battleState = null;
        return { type: "victory" };
    }

    // 保存游戏
    save() {
        const saveData = {
            player: this.player,
            currentStoryNode: this.currentStoryNode,
            timestamp: Date.now()
        };
        localStorage.setItem("potianyjian_save", JSON.stringify(saveData));
        return true;
    }

    // 读取游戏
    load() {
        const saveData = localStorage.getItem("potianyjian_save");
        if (saveData) {
            const data = JSON.parse(saveData);
            this.player = data.player;
            this.currentStoryNode = data.currentStoryNode;
            return true;
        }
        return false;
    }
}

// 游戏控制器
class Game {
    constructor() {
        this.state = new GameState();
        this.currentScreen = "character-creation";
        this.selectedCharacter = null;
        this.typewriterTimer = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        
        // 尝试加载存档
        if (this.state.load()) {
            this.switchScreen("game-interface");
            this.updateDisplay();
            this.showStoryNode(this.state.currentStoryNode);
        }
    }

    bindEvents() {
        // 角色选择
        document.querySelectorAll('.character-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.selectedCharacter = card.dataset.character;
            });
        });

        // 开始游戏
        document.getElementById('start-game').addEventListener('click', () => {
            const playerName = document.getElementById('player-name').value.trim() || "江湖侠客";
            if (this.selectedCharacter) {
                this.state.initializeCharacter(this.selectedCharacter, playerName);
                this.switchScreen("game-interface");
                this.updateDisplay();
                this.showStoryNode("start");
            } else {
                alert("请选择一个角色！");
            }
        });

        // 菜单按钮
        document.getElementById('status-btn').addEventListener('click', () => this.showModal('status-screen'));
        document.getElementById('inventory-btn').addEventListener('click', () => this.showModal('inventory-screen'));
        document.getElementById('skills-btn').addEventListener('click', () => this.showModal('skills-screen'));
        document.getElementById('save-btn').addEventListener('click', () => this.saveGame());

        // 模态框关闭
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.target.closest('.modal').style.display = 'none';
            });
        });

        // 点击模态框外部关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // 战斗按钮
        document.getElementById('attack-btn').addEventListener('click', () => this.battleAction('attack'));
        document.getElementById('skill-btn').addEventListener('click', () => this.battleAction('skill'));
        document.getElementById('item-btn').addEventListener('click', () => this.showBattleItems());
        document.getElementById('flee-btn').addEventListener('click', () => this.battleAction('flee'));
    }

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }

    showModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
        
        // 更新模态框内容
        switch (modalId) {
            case 'status-screen':
                this.updateStatusScreen();
                break;
            case 'inventory-screen':
                this.updateInventoryScreen();
                break;
            case 'skills-screen':
                this.updateSkillsScreen();
                break;
        }
    }

    updateDisplay() {
        const player = this.state.player;
        
        // 更新状态栏
        document.getElementById('player-name-display').textContent = player.name;
        document.getElementById('player-level').textContent = `Lv.${player.level}`;
        
        // 更新血条
        const hpPercent = (player.hp / player.maxHp) * 100;
        document.getElementById('hp-bar').style.width = `${hpPercent}%`;
        document.getElementById('hp-text').textContent = `${player.hp}/${player.maxHp}`;
        
        // 更新蓝条
        const mpPercent = (player.mp / player.maxMp) * 100;
        document.getElementById('mp-bar').style.width = `${mpPercent}%`;
        document.getElementById('mp-text').textContent = `${player.mp}/${player.maxMp}`;
    }

    updateStatusScreen() {
        const player = this.state.player;
        document.getElementById('level-display').textContent = player.level;
        document.getElementById('exp-display').textContent = `${player.exp}/${player.expToNext}`;
        document.getElementById('strength-display').textContent = player.stats.strength;
        document.getElementById('agility-display').textContent = player.stats.agility;
        document.getElementById('intelligence-display').textContent = player.stats.intelligence;
        document.getElementById('constitution-display').textContent = player.stats.constitution;
        document.getElementById('location-display').textContent = player.location;
    }

    updateInventoryScreen() {
        const grid = document.getElementById('inventory-grid');
        grid.innerHTML = '';
        
        const inventory = this.state.player.inventory;
        const maxSlots = 15;
        
        for (let i = 0; i < maxSlots; i++) {
            const slot = document.createElement('div');
            slot.className = 'item-slot empty';
            
            const items = Object.keys(inventory);
            if (i < items.length) {
                const itemName = items[i];
                const quantity = inventory[itemName];
                slot.classList.remove('empty');
                slot.innerHTML = `
                    <div style="font-size: 10px; text-align: center;">
                        <div>${itemName}</div>
                        <div>×${quantity}</div>
                    </div>
                `;
                slot.addEventListener('click', () => this.useItemFromInventory(itemName));
            }
            
            grid.appendChild(slot);
        }
    }

    updateSkillsScreen() {
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        
        this.state.player.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'skill-item';
            skillDiv.innerHTML = `
                <div class="skill-name">${skill}</div>
                <div class="skill-level">已掌握</div>
            `;
            skillsList.appendChild(skillDiv);
        });
    }

    useItemFromInventory(itemName) {
        if (this.state.useItem(itemName)) {
            this.updateDisplay();
            this.updateInventoryScreen();
            console.log(`使用了 ${itemName}`);
        }
    }

    showStoryNode(nodeId) {
        const node = GameData.storyNodes[nodeId];
        if (!node) return;

        this.state.currentStoryNode = nodeId;
        
        // 应用奖励
        if (node.reward) {
            if (node.reward.exp) {
                this.state.gainExp(node.reward.exp);
            }
            if (node.reward.items) {
                node.reward.items.forEach(item => this.state.addItem(item, 1));
            }
            if (node.reward.skill) {
                this.state.player.skills.push(node.reward.skill);
            }
        }

        // 显示文本
        this.typewriterEffect(node.text, () => {
            // 显示选择按钮
            this.showChoices(node.choices);
        });

        this.updateDisplay();
    }

    typewriterEffect(text, callback) {
        const storyText = document.getElementById('story-text');
        storyText.innerHTML = '';
        
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                storyText.innerHTML += text[index];
                index++;
            } else {
                clearInterval(timer);
                if (callback) callback();
            }
        }, 30);
    }

    showChoices(choices) {
        const choiceArea = document.getElementById('choice-area');
        choiceArea.innerHTML = '';

        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            
            // 检查是否有消耗要求
            if (choice.cost && !this.state.player.inventory[choice.cost]) {
                button.disabled = true;
                button.textContent += ` (需要: ${choice.cost})`;
            }
            
            button.addEventListener('click', () => {
                this.handleChoice(choice);
            });
            
            choiceArea.appendChild(button);
        });
    }

    handleChoice(choice) {
        // 处理消耗
        if (choice.cost && this.state.player.inventory[choice.cost]) {
            this.state.player.inventory[choice.cost]--;
            if (this.state.player.inventory[choice.cost] <= 0) {
                delete this.state.player.inventory[choice.cost];
            }
        }

        if (choice.action === "battle") {
            const storyNode = GameData.storyNodes[this.state.currentStoryNode];
            this.startBattle(storyNode.encounter);
        } else if (choice.next) {
            this.showStoryNode(choice.next);
        }
    }

    startBattle(enemyType) {
        const battleState = this.state.startBattle(enemyType);
        this.showModal('battle-screen');
        this.updateBattleDisplay();
    }

    updateBattleDisplay() {
        if (!this.state.battleState) return;

        const player = this.state.player;
        const enemy = this.state.battleState.enemy;

        // 更新玩家状态
        document.getElementById('player-battle-name').textContent = player.name;
        const playerHpPercent = (player.hp / player.maxHp) * 100;
        document.getElementById('player-battle-hp').style.width = `${playerHpPercent}%`;
        document.getElementById('player-battle-hp-text').textContent = `${player.hp}/${player.maxHp}`;

        // 更新敌人状态
        document.getElementById('enemy-name').textContent = enemy.name;
        const enemyHpPercent = (enemy.hp / enemy.maxHp) * 100;
        document.getElementById('enemy-hp').style.width = `${enemyHpPercent}%`;
        document.getElementById('enemy-hp-text').textContent = `${enemy.hp}/${enemy.maxHp}`;

        // 更新战斗日志
        const battleLog = document.getElementById('battle-log');
        battleLog.innerHTML = this.state.battleState.battleLog.map(log => `<div>${log}</div>`).join('');
        battleLog.scrollTop = battleLog.scrollHeight;

        // 更新按钮状态
        const isPlayerTurn = this.state.battleState.playerTurn;
        document.querySelectorAll('.battle-btn').forEach(btn => {
            btn.disabled = !isPlayerTurn;
        });
    }

    battleAction(action, data = null) {
        if (!this.state.battleState) return;

        const result = this.state.battleTurn(action, data);
        this.updateBattleDisplay();
        this.updateDisplay();

        if (result) {
            setTimeout(() => {
                document.getElementById('battle-screen').style.display = 'none';
                if (result.type === "victory") {
                    this.showStoryNode("forest_deep"); // 继续剧情
                } else if (result.type === "flee") {
                    this.showStoryNode("forest_entrance");
                }
            }, 2000);
        }
    }

    showBattleItems() {
        // 简化的物品选择
        const potions = Object.keys(this.state.player.inventory).filter(item => 
            GameData.items[item] && (GameData.items[item].effect === "heal" || GameData.items[item].effect === "mana")
        );
        
        if (potions.length > 0) {
            const itemName = potions[0]; // 使用第一个药品
            this.battleAction('item', itemName);
        } else {
            alert("没有可用的物品！");
        }
    }

    saveGame() {
        if (this.state.save()) {
            alert("游戏已保存！");
        } else {
            alert("保存失败！");
        }
    }
}

// 启动游戏
document.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
});

// 游戏设置管理
const GameSettings = {
    // 默认设置
    defaults: {
        theme: 'default',
        fontSize: 14,
        animations: true,
        autoSave: true,
        difficulty: 'normal',
        textSpeed: 30,
        confirmActions: true,
        battleAuto: false,
        masterVolume: 70,
        bgmVolume: 50,
        sfxVolume: 80,
        vibration: true,
        highContrast: false,
        largeButtons: false,
        screenReader: false,
        buttonDelay: 0
    },
    
    // 当前设置
    current: {},
    
    // 初始化设置
    init() {
        const saved = localStorage.getItem('game_settings');
        if (saved) {
            this.current = { ...this.defaults, ...JSON.parse(saved) };
        } else {
            this.current = { ...this.defaults };
        }
        this.apply();
    },
    
    // 保存设置
    save() {
        localStorage.setItem('game_settings', JSON.stringify(this.current));
        this.showNotification('设置已保存', 'success');
    },
    
    // 应用设置
    apply() {
        this.applyTheme();
        this.applyFontSize();
        this.applyAnimations();
        this.applyAccessibility();
        this.applyButtonDelay();
    },
    
    // 应用主题
    applyTheme() {
        const body = document.body;
        body.className = body.className.replace(/theme-\w+/g, '');
        if (this.current.theme !== 'default') {
            body.classList.add(`theme-${this.current.theme}`);
        }
    },
    
    // 应用字体大小
    applyFontSize() {
        document.documentElement.style.setProperty('--base-font-size', `${this.current.fontSize}px`);
    },
    
    // 应用动画设置
    applyAnimations() {
        if (!this.current.animations) {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }
    },
    
    // 应用辅助功能设置
    applyAccessibility() {
        const body = document.body;
        
        // 高对比度
        if (this.current.highContrast) {
            body.classList.add('high-contrast');
        } else {
            body.classList.remove('high-contrast');
        }
        
        // 大按钮模式
        if (this.current.largeButtons) {
            body.classList.add('large-buttons');
        } else {
            body.classList.remove('large-buttons');
        }
        
        // 屏幕阅读器支持
        if (this.current.screenReader) {
            body.classList.add('screen-reader-mode');
        } else {
            body.classList.remove('screen-reader-mode');
        }
    },
    
    // 应用按钮延迟
    applyButtonDelay() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (this.current.buttonDelay > 0) {
                button.style.pointerEvents = 'none';
                setTimeout(() => {
                    button.style.pointerEvents = 'auto';
                }, this.current.buttonDelay);
            }
        });
    },
    
    // 重置设置
    reset() {
        this.current = { ...this.defaults };
        this.save();
        this.apply();
        this.updateSettingsUI();
        this.showNotification('设置已重置为默认值', 'success');
    },
    
    // 更新设置界面
    updateSettingsUI() {
        // 更新所有设置控件的值
        document.getElementById('theme-select').value = this.current.theme;
        document.getElementById('font-size-slider').value = this.current.fontSize;
        document.getElementById('font-size-value').textContent = `${this.current.fontSize}px`;
        document.getElementById('animations-toggle').checked = this.current.animations;
        document.getElementById('auto-save-toggle').checked = this.current.autoSave;
        document.getElementById('difficulty-select').value = this.current.difficulty;
        document.getElementById('text-speed-slider').value = this.current.textSpeed;
        document.getElementById('text-speed-value').textContent = this.getTextSpeedLabel(this.current.textSpeed);
        document.getElementById('confirm-actions-toggle').checked = this.current.confirmActions;
        document.getElementById('battle-auto-toggle').checked = this.current.battleAuto;
        document.getElementById('master-volume-slider').value = this.current.masterVolume;
        document.getElementById('master-volume-value').textContent = `${this.current.masterVolume}%`;
        document.getElementById('bgm-volume-slider').value = this.current.bgmVolume;
        document.getElementById('bgm-volume-value').textContent = `${this.current.bgmVolume}%`;
        document.getElementById('sfx-volume-slider').value = this.current.sfxVolume;
        document.getElementById('sfx-volume-value').textContent = `${this.current.sfxVolume}%`;
        document.getElementById('vibration-toggle').checked = this.current.vibration;
        document.getElementById('high-contrast-toggle').checked = this.current.highContrast;
        document.getElementById('large-buttons-toggle').checked = this.current.largeButtons;
        document.getElementById('screen-reader-toggle').checked = this.current.screenReader;
        document.getElementById('button-delay-slider').value = this.current.buttonDelay;
        document.getElementById('button-delay-value').textContent = `${this.current.buttonDelay}ms`;
    },
    
    // 获取文字速度标签
    getTextSpeedLabel(value) {
        if (value <= 20) return '慢';
        if (value <= 40) return '正常';
        if (value <= 60) return '快';
        return '极快';
    },
    
    // 显示通知
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },
    
    // 确认对话框
    showConfirm(title, message, onConfirm, onCancel = null) {
        if (!this.current.confirmActions) {
            onConfirm();
            return;
        }
        
        const overlay = document.createElement('div');
        overlay.className = 'modal';
        overlay.style.display = 'block';
        
        const dialog = document.createElement('div');
        dialog.className = 'confirm-dialog';
        dialog.innerHTML = `
            <h4>${title}</h4>
            <p>${message}</p>
            <div class="buttons">
                <button class="btn-confirm">确认</button>
                <button class="btn-cancel">取消</button>
            </div>
        `;
        
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        
        const confirmBtn = dialog.querySelector('.btn-confirm');
        const cancelBtn = dialog.querySelector('.btn-cancel');
        
        confirmBtn.onclick = () => {
            overlay.remove();
            onConfirm();
        };
        
        cancelBtn.onclick = () => {
            overlay.remove();
            if (onCancel) onCancel();
        };
        
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.remove();
                if (onCancel) onCancel();
            }
        };
    },
    
    // 导出存档
    exportSave() {
        const gameData = {
            character: gameState.character,
            inventory: gameState.inventory,
            currentScene: gameState.currentScene,
            gameFlags: gameState.gameFlags,
            playTime: gameState.playTime || 0,
            saveDate: new Date().toISOString(),
            settings: this.current
        };
        
        const dataStr = JSON.stringify(gameData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `破天一剑存档_${new Date().toLocaleDateString().replace(/\//g, '-')}.json`;
        link.click();
        
        this.showNotification('存档导出成功！', 'success');
    },
    
    // 导入存档
    importSave(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const gameData = JSON.parse(e.target.result);
                
                // 验证存档数据
                if (!gameData.character || !gameData.inventory) {
                    throw new Error('无效的存档文件');
                }
                
                this.showConfirm(
                    '导入存档',
                    '这将覆盖当前游戏进度，确定要导入存档吗？',
                    () => {
                        // 恢复游戏数据
                        gameState.character = gameData.character;
                        gameState.inventory = gameData.inventory;
                        gameState.currentScene = gameData.currentScene || 'start';
                        gameState.gameFlags = gameData.gameFlags || {};
                        gameState.playTime = gameData.playTime || 0;
                        
                        // 恢复设置
                        if (gameData.settings) {
                            this.current = { ...this.defaults, ...gameData.settings };
                            this.apply();
                            this.updateSettingsUI();
                        }
                        
                        // 保存到本地存储
                        GameManager.saveGame();
                        this.save();
                        
                        // 刷新界面
                        GameManager.updateUI();
                        GameManager.changeScene(gameState.currentScene);
                        
                        this.showNotification('存档导入成功！', 'success');
                    }
                );
            } catch (error) {
                this.showNotification('存档文件格式错误！', 'error');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
    },
    
    // 清除所有数据
    clearAllData() {
        this.showConfirm(
            '清除所有数据',
            '这将删除所有游戏进度和设置，此操作不可恢复！',
            () => {
                localStorage.clear();
                this.showNotification('所有数据已清除，页面将刷新', 'warning');
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        );
    },
    
    // 更新存档大小显示
    updateSaveSize() {
        const saveData = localStorage.getItem('gameState') || '';
        const settingsData = localStorage.getItem('game_settings') || '';
        const totalSize = (saveData.length + settingsData.length) * 2; // 估算字节数
        const sizeKB = (totalSize / 1024).toFixed(1);
        document.getElementById('save-size').textContent = `${sizeKB} KB`;
    },
    
    // 更新游戏时长显示
    updatePlayTime() {
        const playTime = gameState.playTime || 0;
        const minutes = Math.floor(playTime / 60000);
        const hours = Math.floor(minutes / 60);
        
        let timeStr;
        if (hours > 0) {
            timeStr = `${hours}小时${minutes % 60}分钟`;
        } else {
            timeStr = `${minutes}分钟`;
        }
        
        document.getElementById('play-time').textContent = timeStr;
    },
    
    // 更新存档创建时间
    updateSaveDate() {
        const saveData = localStorage.getItem('gameState');
        if (saveData) {
            try {
                const data = JSON.parse(saveData);
                const saveDate = data.saveDate ? new Date(data.saveDate).toLocaleString() : '未知';
                document.getElementById('save-date').textContent = saveDate;
            } catch (e) {
                document.getElementById('save-date').textContent = '未知';
            }
        }
    }
};

// 震动反馈函数
function vibrate(pattern = [100]) {
    if (GameSettings.current.vibration && navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

// 游戏时长追踪
let gameStartTime = Date.now();
let lastSaveTime = Date.now();

function updatePlayTime() {
    if (!gameState.playTime) gameState.playTime = 0;
    const currentTime = Date.now();
    gameState.playTime += currentTime - lastSaveTime;
    lastSaveTime = currentTime;
}

// 在原有的 GameManager.init 函数中添加设置初始化
const originalInit = GameManager.init;
GameManager.init = function() {
    originalInit.call(this);
    GameSettings.init();
    
    // 绑定设置界面事件
    this.bindSettingsEvents();
    
    // 自动保存定时器
    if (GameSettings.current.autoSave) {
        setInterval(() => {
            updatePlayTime();
            this.saveGame();
        }, 60000); // 每分钟自动保存
    }
};

// 绑定设置界面事件
GameManager.bindSettingsEvents = function() {
    // 设置按钮
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
        settingsBtn.onclick = () => {
            vibrate();
            const settingsScreen = document.getElementById('settings-screen');
            settingsScreen.style.display = 'block';
            GameSettings.updateSettingsUI();
            GameSettings.updateSaveSize();
            GameSettings.updatePlayTime();
            GameSettings.updateSaveDate();
        };
    }
    
    // 关闭设置界面
    const settingsClose = document.querySelector('#settings-screen .close');
    if (settingsClose) {
        settingsClose.onclick = () => {
            document.getElementById('settings-screen').style.display = 'none';
        };
    }
    
    // 主题选择
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.onchange = (e) => {
            GameSettings.current.theme = e.target.value;
            GameSettings.applyTheme();
            GameSettings.save();
            vibrate();
        };
    }
    
    // 字体大小
    const fontSizeSlider = document.getElementById('font-size-slider');
    if (fontSizeSlider) {
        fontSizeSlider.oninput = (e) => {
            const value = parseInt(e.target.value);
            GameSettings.current.fontSize = value;
            document.getElementById('font-size-value').textContent = `${value}px`;
            GameSettings.applyFontSize();
        };
        
        fontSizeSlider.onchange = () => {
            GameSettings.save();
            vibrate();
        };
    }
    
    // 动画开关
    const animationsToggle = document.getElementById('animations-toggle');
    if (animationsToggle) {
        animationsToggle.onchange = (e) => {
            GameSettings.current.animations = e.target.checked;
            GameSettings.applyAnimations();
            GameSettings.save();
            vibrate();
        };
    }
    
    // 自动保存
    const autoSaveToggle = document.getElementById('auto-save-toggle');
    if (autoSaveToggle) {
        autoSaveToggle.onchange = (e) => {
            GameSettings.current.autoSave = e.target.checked;
            GameSettings.save();
            vibrate();
        };
    }
    
    // 游戏难度
    const difficultySelect = document.getElementById('difficulty-select');
    if (difficultySelect) {
        difficultySelect.onchange = (e) => {
            GameSettings.current.difficulty = e.target.value;
            GameSettings.save();
            GameSettings.showNotification('难度设置已更新，将在下次战斗生效', 'info');
            vibrate();
        };
    }
    
    // 文字速度
    const textSpeedSlider = document.getElementById('text-speed-slider');
    if (textSpeedSlider) {
        textSpeedSlider.oninput = (e) => {
            const value = parseInt(e.target.value);
            GameSettings.current.textSpeed = value;
            document.getElementById('text-speed-value').textContent = GameSettings.getTextSpeedLabel(value);
        };
        
        textSpeedSlider.onchange = () => {
            GameSettings.save();
            vibrate();
        };
    }
    
    // 操作确认
    const confirmActionsToggle = document.getElementById('confirm-actions-toggle');
    if (confirmActionsToggle) {
        confirmActionsToggle.onchange = (e) => {
            GameSettings.current.confirmActions = e.target.checked;
            GameSettings.save();
            vibrate();
        };
    }
    
    // 战斗自动模式
    const battleAutoToggle = document.getElementById('battle-auto-toggle');
    if (battleAutoToggle) {
        battleAutoToggle.onchange = (e) => {
            GameSettings.current.battleAuto = e.target.checked;
            GameSettings.save();
            vibrate();
        };
    }
    
    // 音量滑块
    const volumeSliders = ['master-volume', 'bgm-volume', 'sfx-volume'];
    volumeSliders.forEach(sliderId => {
        const slider = document.getElementById(`${sliderId}-slider`);
        if (slider) {
            const settingKey = sliderId.replace('-', '').replace('slider', '') + 'Volume';
            
            slider.oninput = (e) => {
                const value = parseInt(e.target.value);
                GameSettings.current[settingKey] = value;
                document.getElementById(`${sliderId.replace('slider', 'value')}`).textContent = `${value}%`;
            };
            
            slider.onchange = () => {
                GameSettings.save();
                vibrate();
            };
        }
    });
    
    // 震动开关
    const vibrationToggle = document.getElementById('vibration-toggle');
    if (vibrationToggle) {
        vibrationToggle.onchange = (e) => {
            GameSettings.current.vibration = e.target.checked;
            GameSettings.save();
            if (e.target.checked) vibrate();
        };
    }
    
    // 辅助功能开关
    const accessibilityToggles = [
        { id: 'high-contrast-toggle', key: 'highContrast' },
        { id: 'large-buttons-toggle', key: 'largeButtons' },
        { id: 'screen-reader-toggle', key: 'screenReader' }
    ];
    
    accessibilityToggles.forEach(({ id, key }) => {
        const toggle = document.getElementById(id);
        if (toggle) {
            toggle.onchange = (e) => {
                GameSettings.current[key] = e.target.checked;
                GameSettings.applyAccessibility();
                GameSettings.save();
                vibrate();
            };
        }
    });
    
    // 按钮延迟
    const buttonDelaySlider = document.getElementById('button-delay-slider');
    if (buttonDelaySlider) {
        buttonDelaySlider.oninput = (e) => {
            const value = parseInt(e.target.value);
            GameSettings.current.buttonDelay = value;
            document.getElementById('button-delay-value').textContent = `${value}ms`;
        };
        
        buttonDelaySlider.onchange = () => {
            GameSettings.save();
            vibrate();
        };
    }
    
    // 数据管理按钮
    const exportSaveBtn = document.getElementById('export-save-btn');
    if (exportSaveBtn) {
        exportSaveBtn.onclick = () => {
            vibrate();
            GameSettings.exportSave();
        };
    }
    
    const importSaveBtn = document.getElementById('import-save-btn');
    const importSaveFile = document.getElementById('import-save-file');
    if (importSaveBtn && importSaveFile) {
        importSaveBtn.onclick = () => {
            vibrate();
            importSaveFile.click();
        };
        
        importSaveFile.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                GameSettings.importSave(file);
            }
            e.target.value = ''; // 清除文件选择
        };
    }
    
    const resetSettingsBtn = document.getElementById('reset-settings-btn');
    if (resetSettingsBtn) {
        resetSettingsBtn.onclick = () => {
            vibrate();
            GameSettings.showConfirm(
                '重置设置',
                '确定要将所有设置重置为默认值吗？',
                () => GameSettings.reset()
            );
        };
    }
    
    const clearDataBtn = document.getElementById('clear-data-btn');
    if (clearDataBtn) {
        clearDataBtn.onclick = () => {
            vibrate([200, 100, 200]);
            GameSettings.clearAllData();
        };
    }
    
    // 关于游戏
    const aboutGameBtn = document.getElementById('about-game-btn');
    const aboutScreen = document.getElementById('about-screen');
    if (aboutGameBtn && aboutScreen) {
        aboutGameBtn.onclick = (e) => {
            e.preventDefault();
            vibrate();
            aboutScreen.style.display = 'block';
        };
        
        const aboutClose = aboutScreen.querySelector('.close');
        if (aboutClose) {
            aboutClose.onclick = () => {
                aboutScreen.style.display = 'none';
            };
        }
    }
    
    // 点击模态框外部关闭
    window.onclick = (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
};