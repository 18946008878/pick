// 游戏数据和配置
const GameData = {
    // 角色配置
    characters: {
        yijian: {
            name: "一剑",
            description: "近战输出，掌握乾光之力",
            element: "light",
            baseStats: { strength: 20, agility: 15, intelligence: 10, constitution: 18 },
            skills: ["破天剑法", "乾坤一剑", "光明斩"],
            specialAbility: "破天神功",
            growthType: "warrior"
        },
        xiuya: {
            name: "秀雅", 
            description: "远程射手，善用火系弓箭",
            element: "fire",
            baseStats: { strength: 15, agility: 20, intelligence: 15, constitution: 12 },
            skills: ["火箭术", "连环射", "爆炎箭"],
            specialAbility: "火凤九天",
            growthType: "archer"
        },
        zhilu: {
            name: "指路",
            description: "灵活刺客，突进控制兼备", 
            element: "wind",
            baseStats: { strength: 15, agility: 20, intelligence: 15, constitution: 15 },
            skills: ["疾风步", "影分身", "风刃舞"],
            specialAbility: "风神术",
            growthType: "assassin"
        },
        muzhi: {
            name: "拇指",
            description: "治疗辅助，善用陷阱和天雷",
            element: "thunder",
            baseStats: { strength: 12, agility: 15, intelligence: 20, constitution: 16 },
            skills: ["雷光术", "治疗术", "陷阱布置"],
            specialAbility: "天雷引",
            growthType: "support"
        },
        // 新增隐藏角色
        nangong: {
            name: "南宫",
            description: "防御战士，最高防御力和反击能力",
            element: "earth",
            baseStats: { strength: 18, agility: 10, intelligence: 12, constitution: 25 },
            skills: ["岩壁术", "反击", "大地震"],
            specialAbility: "不动如山",
            growthType: "tank",
            unlockCondition: "完成第一章"
        },
        yunting: {
            name: "云婷",
            description: "冰系法师，厚积薄发愈战愈勇",
            element: "ice",
            baseStats: { strength: 10, agility: 12, intelligence: 25, constitution: 15 },
            skills: ["冰封术", "暴风雪", "冰墙"],
            specialAbility: "冰河时代",
            growthType: "mage",
            unlockCondition: "达到15级"
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
        // 普通敌人
        wildWolf: {
            name: "野狼",
            level: 1,
            hp: 30,
            attack: 8,
            defense: 3,
            element: "earth",
            skills: ["撕咬"],
            exp: 15,
            dropRate: { "破天铜牌": 0.8, "活血丹": 0.3 },
            type: "beast"
        },
        bandit: {
            name: "山贼",
            level: 2,
            hp: 45,
            attack: 12,
            defense: 5,
            element: "none",
            skills: ["乱刀斩"],
            exp: 25,
            dropRate: { "破天铜牌": 0.7, "铁剑": 0.2, "活血丹": 0.4 },
            type: "human"
        },
        evilSpirit: {
            name: "邪灵",
            level: 3,
            hp: 60,
            attack: 15,
            defense: 4,
            element: "dark",
            skills: ["鬼火", "恐惧"],
            exp: 35,
            dropRate: { "破天银牌": 0.5, "回神丹": 0.3, "暗影石": 0.1 },
            type: "spirit"
        },
        // 精英怪物
        forestGuardian: {
            name: "森林守护者",
            level: 5,
            hp: 120,
            attack: 20,
            defense: 8,
            element: "nature",
            skills: ["藤蔓缠绕", "自然愈合", "荆棘反击"],
            exp: 80,
            dropRate: { "破天银牌": 0.8, "生命之果": 0.4, "翡翠护符": 0.2 },
            type: "elite",
            special: "每回合恢复10点生命"
        },
        shadowAssassin: {
            name: "暗影刺客",
            level: 8,
            hp: 100,
            attack: 35,
            defense: 6,
            element: "dark",
            skills: ["暗杀", "影分身", "毒刃"],
            exp: 120,
            dropRate: { "破天银牌": 0.9, "暗影匕首": 0.3, "隐身斗篷": 0.1 },
            type: "elite",
            special: "30%闪避率"
        },
        // BOSS级敌人
        dragonLord: {
            name: "火龙王",
            level: 15,
            hp: 500,
            attack: 60,
            defense: 15,
            element: "fire",
            skills: ["龙息", "火焰风暴", "龙鳞护盾", "怒火爆发"],
            exp: 300,
            dropRate: { "破天金牌": 0.9, "龙鳞剑": 0.5, "火龙珠": 0.3, "龙王宝箱": 1.0 },
            type: "boss",
            special: "免疫火系伤害，三阶段战斗",
            phases: [
                { hpThreshold: 0.7, action: "召唤火焰精灵" },
                { hpThreshold: 0.3, action: "进入狂暴状态" }
            ]
        }
    },

    // 装备系统
    equipment: {
        weapons: {
            woodenSword: {
                name: "木剑",
                type: "weapon",
                subType: "sword",
                attack: 5,
                description: "最基础的木制武器",
                rarity: "common",
                price: 10,
                requirements: { level: 1 }
            },
            ironSword: {
                name: "铁剑",
                type: "weapon",
                subType: "sword",
                attack: 12,
                description: "普通的铁制长剑",
                rarity: "common",
                price: 50,
                requirements: { level: 3 }
            },
            dragonScaleSword: {
                name: "龙鳞剑",
                type: "weapon",
                subType: "sword",
                attack: 35,
                fireResist: 20,
                description: "用火龙鳞片锻造的神兵",
                rarity: "epic",
                price: 500,
                requirements: { level: 10, strength: 25 },
                special: "攻击时有20%几率造成灼烧效果"
            },
            shadowDagger: {
                name: "暗影匕首",
                type: "weapon",
                subType: "dagger",
                attack: 25,
                agility: 5,
                description: "来自暗影位面的神秘武器",
                rarity: "rare",
                price: 200,
                requirements: { level: 8, agility: 20 },
                special: "攻击时有15%几率触发暗袭效果"
            }
        },
        armor: {
            clothRobe: {
                name: "布袍",
                type: "armor",
                subType: "robe",
                defense: 3,
                description: "简单的布制长袍",
                rarity: "common",
                price: 15
            },
            leatherArmor: {
                name: "皮甲",
                type: "armor",
                subType: "light",
                defense: 8,
                agility: 2,
                description: "轻便的皮革护甲",
                rarity: "common",
                price: 40
            },
            plateArmor: {
                name: "板甲",
                type: "armor",
                subType: "heavy",
                defense: 20,
                constitution: 5,
                agility: -3,
                description: "厚重的金属板甲",
                rarity: "rare",
                price: 300,
                requirements: { level: 12, constitution: 20 }
            }
        },
        accessories: {
            powerRing: {
                name: "力量戒指",
                type: "accessory",
                subType: "ring",
                strength: 3,
                description: "增强力量的魔法戒指",
                rarity: "uncommon",
                price: 80
            },
            wisdomNecklace: {
                name: "智慧项链",
                type: "accessory",
                subType: "necklace",
                intelligence: 5,
                mp: 20,
                description: "蕴含古老智慧的项链",
                rarity: "rare",
                price: 150
            },
            dragonPearl: {
                name: "火龙珠",
                type: "accessory",
                subType: "orb",
                intelligence: 8,
                fireBonus: 25,
                description: "火龙王的内丹，蕴含强大火系力量",
                rarity: "legendary",
                price: 1000,
                requirements: { level: 15 },
                special: "火系技能威力提升25%"
            }
        }
    },

    // 技能系统
    skills: {
        // 基础技能
        basic: {
            attack: { name: "普通攻击", cost: 0, damage: 1.0, description: "基础物理攻击" },
            heal: { name: "治疗术", cost: 10, heal: 30, description: "恢复生命值" },
            guard: { name: "防御", cost: 0, defenseBonus: 0.5, description: "提升50%防御力" }
        },
        // 元素技能
        fire: {
            fireball: { name: "火球术", cost: 15, damage: 1.5, element: "fire", description: "发射火球攻击敌人" },
            fireStorm: { name: "火焰风暴", cost: 25, damage: 2.0, element: "fire", aoe: true, description: "范围火焰攻击" },
            phoenixFire: { name: "凤凰烈火", cost: 40, damage: 3.0, element: "fire", description: "终极火系技能", requirements: { level: 20 } }
        },
        ice: {
            iceSpike: { name: "冰锥术", cost: 12, damage: 1.3, element: "ice", description: "发射锋利冰锥", effect: "减速" },
            blizzard: { name: "暴风雪", cost: 30, damage: 1.8, element: "ice", aoe: true, description: "大范围冰雪攻击" },
            frostArmor: { name: "冰甲术", cost: 20, defense: 1.5, duration: 3, description: "提升防御并反弹伤害" }
        },
        lightning: {
            shock: { name: "电击", cost: 10, damage: 1.2, element: "lightning", description: "快速雷电攻击", effect: "麻痹" },
            chainLightning: { name: "连锁闪电", cost: 25, damage: 1.6, element: "lightning", description: "跳跃式雷电攻击" },
            thunderStorm: { name: "雷暴", cost: 35, damage: 2.5, element: "lightning", description: "天雷降世" }
        },
        // 特殊技能
        special: {
            doubleStrike: { name: "二连击", cost: 15, attacks: 2, damage: 0.8, description: "连续攻击两次" },
            criticalStrike: { name: "致命一击", cost: 20, damage: 2.5, critRate: 0.5, description: "高暴击率攻击" },
            lifeSteal: { name: "生命汲取", cost: 18, damage: 1.3, heal: 0.5, description: "攻击时恢复伤害50%的生命" },
            timeStop: { name: "时间停止", cost: 50, description: "跳过敌人一回合", requirements: { level: 25 } }
        }
    },

    // 地图系统
    maps: {
        humanRealm: {
            name: "人极星",
            description: "人类聚居的星球，有繁华的城镇和危险的野外",
            areas: {
                beginnerVillage: {
                    name: "新手村",
                    description: "宁静的小村庄，冒险的起点",
                    enemies: ["wildWolf"],
                    level: 1,
                    features: ["商店", "治疗点", "任务发布"]
                },
                darkForest: {
                    name: "黑暗森林",
                    description: "充满危险的原始森林",
                    enemies: ["wildWolf", "bandit", "forestGuardian"],
                    level: 3,
                    features: ["隐藏宝箱", "药草采集"]
                },
                shadowCave: {
                    name: "暗影洞穴",
                    description: "邪恶力量聚集的神秘洞穴",
                    enemies: ["evilSpirit", "shadowAssassin"],
                    level: 8,
                    features: ["BOSS房间", "传送门"]
                }
            }
        },
        dragonRealm: {
            name: "火龙域",
            description: "火龙族统治的炽热星球",
            areas: {
                lavaPlateau: {
                    name: "熔岩高原",
                    description: "炽热的熔岩覆盖大地",
                    enemies: ["fireElemental", "lavaBeast"],
                    level: 12,
                    features: ["火系增强", "炼金材料"]
                },
                dragonLair: {
                    name: "龙王巢穴",
                    description: "火龙王的领域",
                    enemies: ["dragonLord"],
                    level: 15,
                    features: ["BOSS战", "传说装备"],
                    requirements: { "收集火龙令牌": 3 }
                }
            }
        }
    },

    // 任务系统
    quests: {
        main: {
            findArtifacts: {
                name: "寻找亘古圣物",
                description: "收集破天剑、破天牌、破天秘笈",
                type: "main",
                objectives: [
                    { type: "collect", item: "破天剑", current: 0, target: 1 },
                    { type: "collect", item: "破天牌", current: 0, target: 1 },
                    { type: "collect", item: "破天秘笈", current: 0, target: 1 }
                ],
                rewards: { exp: 1000, items: ["宇宙之心"] }
            }
        },
        side: {
            hunterQuest: {
                name: "森林守护者",
                description: "击败森林中的邪恶生物",
                type: "side",
                objectives: [
                    { type: "kill", enemy: "wildWolf", current: 0, target: 5 },
                    { type: "kill", enemy: "forestGuardian", current: 0, target: 1 }
                ],
                rewards: { exp: 200, items: ["翡翠护符"], gold: 100 }
            }
        },
        daily: {
            collectHerbs: {
                name: "采集草药",
                description: "在森林中采集治疗草药",
                type: "daily",
                objectives: [
                    { type: "collect", item: "治疗草", current: 0, target: 10 }
                ],
                rewards: { exp: 50, items: ["活血丹"], gold: 20 },
                resetTime: "daily"
            }
        }
    },

    // 成就系统
    achievements: {
        firstVictory: {
            name: "初战告捷",
            description: "赢得第一场战斗",
            type: "combat",
            condition: { type: "winBattles", target: 1 },
            rewards: { exp: 20, title: "新手勇士" }
        },
        dragonSlayer: {
            name: "屠龙勇士",
            description: "击败火龙王",
            type: "boss",
            condition: { type: "killBoss", boss: "dragonLord" },
            rewards: { exp: 500, title: "屠龙者", item: "龙魂护符" }
        },
        collector: {
            name: "收藏家",
            description: "收集50件装备",
            type: "collection",
            condition: { type: "collectItems", target: 50 },
            rewards: { exp: 300, item: "收藏家徽章" }
        }
    },

    // 商店系统
    shops: {
        generalStore: {
            name: "杂货店",
            items: {
                "活血丹": { price: 20, stock: -1 },
                "回神丹": { price: 30, stock: -1 },
                "木剑": { price: 10, stock: 5 },
                "布袍": { price: 15, stock: 3 }
            }
        },
        weaponShop: {
            name: "武器店",
            items: {
                "铁剑": { price: 50, stock: 3 },
                "暗影匕首": { price: 200, stock: 1, requirements: { level: 8 } },
                "皮甲": { price: 40, stock: 5 }
            }
        },
        magicShop: {
            name: "法术商店",
            items: {
                "智慧项链": { price: 150, stock: 2 },
                "火球卷轴": { price: 80, stock: 10 },
                "治疗卷轴": { price: 60, stock: -1 }
            },
            requirements: { intelligence: 15 }
        }
    },

    // 随机事件系统
    randomEvents: {
        treasureChest: {
            name: "神秘宝箱",
            description: "你发现了一个闪闪发光的宝箱",
            type: "treasure",
            probability: 0.1,
            outcomes: [
                { probability: 0.4, result: "gold", amount: [20, 100] },
                { probability: 0.3, result: "item", items: ["活血丹", "回神丹", "经验丹"] },
                { probability: 0.2, result: "equipment", rarity: "uncommon" },
                { probability: 0.1, result: "rare_equipment", rarity: "rare" }
            ]
        },
        mysteriousTrader: {
            name: "神秘商人",
            description: "一个神秘的商人向你兜售珍稀物品",
            type: "trader",
            probability: 0.05,
            items: [
                { name: "神秘药水", effect: "随机属性+5", price: 200 },
                { name: "经验药水", effect: "获得500经验", price: 300 },
                { name: "幸运符", effect: "下次战斗必定暴击", price: 150 }
            ]
        },
        ancientSpirit: {
            name: "古老精灵",
            description: "遇到了古老的精灵，它愿意传授你知识",
            type: "blessing",
            probability: 0.03,
            effects: [
                { type: "skillPoints", amount: 2 },
                { type: "statBonus", stat: "random", amount: 3 },
                { type: "newSkill", skill: "random" }
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

// 扩展游戏状态
let gameState = {
    character: null,
    inventory: {
        "破天铜牌": 100,
        "活血丹": 3,
        "回神丹": 2
    },
    equipment: {
        weapon: null,
        armor: null,
        accessory: null
    },
    currentScene: 'start',
    gameFlags: {},
    playTime: 0,
    location: {
        realm: 'humanRealm',
        area: 'beginnerVillage'
    },
    quests: {
        active: [],
        completed: [],
        available: ['hunterQuest', 'collectHerbs']
    },
    achievements: {
        unlocked: [],
        progress: {}
    },
    unlockedCharacters: ['yijian', 'xiuya', 'zhilu', 'muzhi'],
    battleStats: {
        wins: 0,
        losses: 0,
        monstersKilled: {},
        bossesDefeated: []
    },
    discoveredAreas: ['beginnerVillage'],
    skillPoints: 0,
    learnedSkills: []
};

// 任务管理系统
const QuestManager = {
    // 获取任务
    getQuest(questId) {
        for (const category in GameData.quests) {
            if (GameData.quests[category][questId]) {
                return GameData.quests[category][questId];
            }
        }
        return null;
    },
    
    // 开始任务
    startQuest(questId) {
        const quest = this.getQuest(questId);
        if (!quest) return false;
        
        const questProgress = {
            id: questId,
            name: quest.name,
            description: quest.description,
            type: quest.type,
            objectives: quest.objectives.map(obj => ({ ...obj })),
            startTime: Date.now(),
            status: 'active'
        };
        
        gameState.quests.active.push(questProgress);
        gameState.quests.available = gameState.quests.available.filter(id => id !== questId);
        
        GameSettings.showNotification(`接受任务：${quest.name}`, 'info');
        return true;
    },
    
    // 更新任务进度
    updateProgress(type, target, amount = 1) {
        gameState.quests.active.forEach(quest => {
            quest.objectives.forEach(objective => {
                if (objective.type === type && 
                    (objective.item === target || objective.enemy === target)) {
                    objective.current = Math.min(objective.current + amount, objective.target);
                    
                    if (objective.current >= objective.target) {
                        GameSettings.showNotification(`任务目标完成：${objective.type} ${target}`, 'success');
                    }
                }
            });
            
            // 检查任务是否完成
            if (quest.objectives.every(obj => obj.current >= obj.target)) {
                this.completeQuest(quest.id);
            }
        });
    },
    
    // 完成任务
    completeQuest(questId) {
        const questIndex = gameState.quests.active.findIndex(q => q.id === questId);
        if (questIndex === -1) return;
        
        const quest = gameState.quests.active[questIndex];
        const questData = this.getQuest(questId);
        
        if (questData.rewards) {
            // 给予奖励
            if (questData.rewards.exp) {
                gameState.character.experience += questData.rewards.exp;
                GameManager.checkLevelUp();
            }
            
            if (questData.rewards.items) {
                questData.rewards.items.forEach(item => {
                    InventoryManager.addItem(item, 1);
                });
            }
            
            if (questData.rewards.gold) {
                InventoryManager.addItem('破天铜牌', questData.rewards.gold);
            }
        }
        
        // 移除完成的任务
        gameState.quests.active.splice(questIndex, 1);
        gameState.quests.completed.push(questId);
        
        GameSettings.showNotification(`任务完成：${quest.name}！`, 'success');
        AchievementManager.checkAchievements();
    },
    
    // 获取任务界面HTML
    getQuestHTML() {
        let html = '<div class="quest-panel">';
        
        // 活跃任务
        if (gameState.quests.active.length > 0) {
            html += '<h4>进行中的任务</h4>';
            gameState.quests.active.forEach(quest => {
                html += `<div class="quest-item active">
                    <h5>${quest.name}</h5>
                    <p>${quest.description}</p>
                    <div class="objectives">`;
                
                quest.objectives.forEach(obj => {
                    const completed = obj.current >= obj.target;
                    html += `<div class="objective ${completed ? 'completed' : ''}">
                        ${obj.type === 'kill' ? '击败' : '收集'} ${obj.enemy || obj.item}: 
                        ${obj.current}/${obj.target}
                        ${completed ? ' ✓' : ''}
                    </div>`;
                });
                
                html += '</div></div>';
            });
        }
        
        // 可接任务
        if (gameState.quests.available.length > 0) {
            html += '<h4>可接任务</h4>';
            gameState.quests.available.forEach(questId => {
                const quest = this.getQuest(questId);
                if (quest) {
                    html += `<div class="quest-item available">
                        <h5>${quest.name}</h5>
                        <p>${quest.description}</p>
                        <button onclick="QuestManager.startQuest('${questId}')">接受任务</button>
                    </div>`;
                }
            });
        }
        
        html += '</div>';
        return html;
    }
};

// 成就管理系统
const AchievementManager = {
    // 检查成就
    checkAchievements() {
        Object.keys(GameData.achievements).forEach(achievementId => {
            if (gameState.achievements.unlocked.includes(achievementId)) return;
            
            const achievement = GameData.achievements[achievementId];
            const condition = achievement.condition;
            let unlocked = false;
            
            switch (condition.type) {
                case 'winBattles':
                    unlocked = gameState.battleStats.wins >= condition.target;
                    break;
                case 'killBoss':
                    unlocked = gameState.battleStats.bossesDefeated.includes(condition.boss);
                    break;
                case 'collectItems':
                    const totalItems = Object.values(gameState.inventory).reduce((sum, count) => sum + count, 0);
                    unlocked = totalItems >= condition.target;
                    break;
            }
            
            if (unlocked) {
                this.unlockAchievement(achievementId);
            }
        });
    },
    
    // 解锁成就
    unlockAchievement(achievementId) {
        const achievement = GameData.achievements[achievementId];
        gameState.achievements.unlocked.push(achievementId);
        
        // 给予奖励
        if (achievement.rewards.exp) {
            gameState.character.experience += achievement.rewards.exp;
        }
        if (achievement.rewards.title) {
            gameState.character.title = achievement.rewards.title;
        }
        if (achievement.rewards.item) {
            InventoryManager.addItem(achievement.rewards.item, 1);
        }
        
        GameSettings.showNotification(`🏆 成就解锁：${achievement.name}！`, 'success');
        GameManager.checkLevelUp();
    },
    
    // 获取成就界面HTML
    getAchievementHTML() {
        let html = '<div class="achievement-panel">';
        
        Object.keys(GameData.achievements).forEach(achievementId => {
            const achievement = GameData.achievements[achievementId];
            const unlocked = gameState.achievements.unlocked.includes(achievementId);
            
            html += `<div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${unlocked ? '🏆' : '🔒'}</div>
                <div class="achievement-info">
                    <h5>${achievement.name}</h5>
                    <p>${achievement.description}</p>
                    ${unlocked ? '<span class="status">已解锁</span>' : '<span class="status">未解锁</span>'}
                </div>
            </div>`;
        });
        
        html += '</div>';
        return html;
    }
};

// 商店管理系统
const ShopManager = {
    // 显示商店
    showShop(shopType) {
        const shop = GameData.shops[shopType];
        if (!shop) return;
        
        // 检查商店需求
        if (shop.requirements) {
            for (const [stat, value] of Object.entries(shop.requirements)) {
                if (gameState.character[stat] < value) {
                    GameSettings.showNotification(`需要${stat} ${value}才能使用此商店`, 'warning');
                    return;
                }
            }
        }
        
        let html = `<div class="shop-panel">
            <h3>${shop.name}</h3>
            <div class="shop-items">`;
        
        Object.entries(shop.items).forEach(([itemName, itemData]) => {
            const canBuy = this.canBuyItem(itemName, itemData);
            const stock = itemData.stock === -1 ? '∞' : itemData.stock;
            
            html += `<div class="shop-item ${canBuy ? '' : 'disabled'}">
                <div class="item-info">
                    <h5>${itemName}</h5>
                    <p>价格: ${itemData.price} 破天铜牌</p>
                    <p>库存: ${stock}</p>
                </div>
                <button onclick="ShopManager.buyItem('${itemName}', '${shopType}')" 
                        ${canBuy ? '' : 'disabled'}>购买</button>
            </div>`;
        });
        
        html += `</div>
            <div class="player-money">
                你的货币: ${gameState.inventory['破天铜牌'] || 0} 破天铜牌
            </div>
        </div>`;
        
        // 显示商店界面
        this.showShopModal(html);
    },
    
    // 检查是否能购买物品
    canBuyItem(itemName, itemData) {
        // 检查货币
        const playerMoney = gameState.inventory['破天铜牌'] || 0;
        if (playerMoney < itemData.price) return false;
        
        // 检查库存
        if (itemData.stock === 0) return false;
        
        // 检查需求
        if (itemData.requirements) {
            for (const [stat, value] of Object.entries(itemData.requirements)) {
                if (gameState.character[stat] < value) return false;
            }
        }
        
        return true;
    },
    
    // 购买物品
    buyItem(itemName, shopType) {
        const shop = GameData.shops[shopType];
        const itemData = shop.items[itemName];
        
        if (!this.canBuyItem(itemName, itemData)) return;
        
        // 扣除货币
        InventoryManager.removeItem('破天铜牌', itemData.price);
        
        // 添加物品
        InventoryManager.addItem(itemName, 1);
        
        // 减少库存
        if (itemData.stock > 0) {
            itemData.stock--;
        }
        
        GameSettings.showNotification(`购买了 ${itemName}`, 'success');
        vibrate();
        
        // 刷新商店界面
        this.showShop(shopType);
    },
    
    // 显示商店模态框
    showShopModal(html) {
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                ${html}
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 绑定关闭事件
        modal.querySelector('.close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }
};

// 随机事件管理系统
const RandomEventManager = {
    // 触发随机事件
    triggerRandomEvent() {
        // 遍历所有事件，根据概率触发
        Object.values(GameData.randomEvents).forEach(event => {
            if (Math.random() < event.probability) {
                this.executeEvent(event);
            }
        });
    },
    
    // 执行事件
    executeEvent(event) {
        let html = `<div class="random-event">
            <h3>${event.name}</h3>
            <p>${event.description}</p>`;
        
        switch (event.type) {
            case 'treasure':
                const outcome = this.selectOutcome(event.outcomes);
                const result = this.processOutcome(outcome);
                html += `<p>${result.message}</p>`;
                break;
                
            case 'trader':
                html += '<div class="trader-items">';
                event.items.forEach((item, index) => {
                    html += `<div class="trader-item">
                        <h5>${item.name}</h5>
                        <p>${item.effect}</p>
                        <p>价格: ${item.price} 破天铜牌</p>
                        <button onclick="RandomEventManager.buyTraderItem(${index})">购买</button>
                    </div>`;
                });
                html += '</div>';
                this.currentTrader = event;
                break;
                
            case 'blessing':
                const effect = event.effects[Math.floor(Math.random() * event.effects.length)];
                const blessing = this.applyBlessing(effect);
                html += `<p>${blessing.message}</p>`;
                break;
        }
        
        html += '</div>';
        this.showEventModal(html);
    },
    
    // 选择结果
    selectOutcome(outcomes) {
        const rand = Math.random();
        let cumulative = 0;
        
        for (const outcome of outcomes) {
            cumulative += outcome.probability;
            if (rand <= cumulative) {
                return outcome;
            }
        }
        
        return outcomes[outcomes.length - 1];
    },
    
    // 处理宝箱结果
    processOutcome(outcome) {
        switch (outcome.result) {
            case 'gold':
                const amount = Math.floor(Math.random() * (outcome.amount[1] - outcome.amount[0] + 1)) + outcome.amount[0];
                InventoryManager.addItem('破天铜牌', amount);
                return { message: `获得了 ${amount} 破天铜牌！` };
                
            case 'item':
                const item = outcome.items[Math.floor(Math.random() * outcome.items.length)];
                InventoryManager.addItem(item, 1);
                return { message: `获得了 ${item}！` };
                
            case 'equipment':
            case 'rare_equipment':
                const equipment = this.generateRandomEquipment(outcome.rarity);
                InventoryManager.addItem(equipment.name, 1);
                return { message: `获得了 ${equipment.name}！` };
                
            default:
                return { message: '什么都没有...' };
        }
    },
    
    // 生成随机装备
    generateRandomEquipment(rarity) {
        const equipment = [];
        Object.values(GameData.equipment).forEach(category => {
            Object.values(category).forEach(item => {
                if (item.rarity === rarity) {
                    equipment.push(item);
                }
            });
        });
        
        return equipment[Math.floor(Math.random() * equipment.length)] || { name: '神秘装备' };
    },
    
    // 应用祝福效果
    applyBlessing(effect) {
        switch (effect.type) {
            case 'skillPoints':
                gameState.skillPoints += effect.amount;
                return { message: `获得了 ${effect.amount} 技能点！` };
                
            case 'statBonus':
                const stats = ['strength', 'agility', 'intelligence', 'constitution'];
                const stat = effect.stat === 'random' ? stats[Math.floor(Math.random() * stats.length)] : effect.stat;
                gameState.character[stat] += effect.amount;
                return { message: `${stat} 永久增加 ${effect.amount}！` };
                
            case 'newSkill':
                // 随机学会一个技能
                return { message: '学会了神秘的技能！' };
                
            default:
                return { message: '得到了神秘的祝福！' };
        }
    },
    
    // 购买商人物品
    buyTraderItem(itemIndex) {
        if (!this.currentTrader) return;
        
        const item = this.currentTrader.items[itemIndex];
        const playerMoney = gameState.inventory['破天铜牌'] || 0;
        
        if (playerMoney < item.price) {
            GameSettings.showNotification('破天铜牌不足！', 'warning');
            return;
        }
        
        InventoryManager.removeItem('破天铜牌', item.price);
        this.applyTraderItem(item);
        GameSettings.showNotification(`购买了 ${item.name}`, 'success');
    },
    
    // 应用商人物品效果
    applyTraderItem(item) {
        if (item.effect.includes('属性+5')) {
            const stats = ['strength', 'agility', 'intelligence', 'constitution'];
            const stat = stats[Math.floor(Math.random() * stats.length)];
            gameState.character[stat] += 5;
            GameSettings.showNotification(`${stat} 增加了 5 点！`, 'success');
        } else if (item.effect.includes('500经验')) {
            gameState.character.experience += 500;
            GameManager.checkLevelUp();
        } else if (item.effect.includes('必定暴击')) {
            gameState.gameFlags.nextCritical = true;
        }
    },
    
    // 显示事件模态框
    showEventModal(html) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                ${html}
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close').onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }
};

// 扩展库存管理
const InventoryManager = {
    // 添加物品
    addItem(itemName, quantity) {
        if (!gameState.inventory[itemName]) {
            gameState.inventory[itemName] = 0;
        }
        gameState.inventory[itemName] += quantity;
        
        // 更新任务进度
        QuestManager.updateProgress('collect', itemName, quantity);
    },
    
    // 移除物品
    removeItem(itemName, quantity) {
        if (!gameState.inventory[itemName]) return false;
        
        if (gameState.inventory[itemName] >= quantity) {
            gameState.inventory[itemName] -= quantity;
            if (gameState.inventory[itemName] === 0) {
                delete gameState.inventory[itemName];
            }
            return true;
        }
        return false;
    },
    
    // 使用物品
    useItem(itemName) {
        if (!gameState.inventory[itemName] || gameState.inventory[itemName] <= 0) {
            GameSettings.showNotification('物品不足！', 'warning');
            return false;
        }
        
        // 物品效果
        const effects = {
            '活血丹': () => {
                const healAmount = 50;
                gameState.character.hp = Math.min(gameState.character.maxHp, gameState.character.hp + healAmount);
                GameSettings.showNotification(`恢复了 ${healAmount} 点生命值`, 'success');
            },
            '回神丹': () => {
                const mpAmount = 30;
                gameState.character.mp = Math.min(gameState.character.maxMp, gameState.character.mp + mpAmount);
                GameSettings.showNotification(`恢复了 ${mpAmount} 点内力值`, 'success');
            },
            '经验丹': () => {
                const expAmount = 100;
                gameState.character.experience += expAmount;
                GameSettings.showNotification(`获得了 ${expAmount} 点经验值`, 'success');
                GameManager.checkLevelUp();
            }
        };
        
        if (effects[itemName]) {
            effects[itemName]();
            this.removeItem(itemName, 1);
            GameManager.updateUI();
            return true;
        }
        
        return false;
    },
    
    // 装备物品
    equipItem(itemName) {
        // 查找装备数据
        let equipmentData = null;
        let equipmentType = null;
        
        for (const [type, items] of Object.entries(GameData.equipment)) {
            if (items[itemName]) {
                equipmentData = items[itemName];
                equipmentType = equipmentData.type;
                break;
            }
        }
        
        if (!equipmentData) return false;
        
        // 检查装备需求
        if (equipmentData.requirements) {
            for (const [stat, value] of Object.entries(equipmentData.requirements)) {
                if (gameState.character[stat] < value) {
                    GameSettings.showNotification(`需要 ${stat} ${value} 才能装备此物品`, 'warning');
                    return false;
                }
            }
        }
        
        // 卸下当前装备
        const currentEquip = gameState.equipment[equipmentType];
        if (currentEquip) {
            this.addItem(currentEquip, 1);
            this.removeEquipmentStats(currentEquip);
        }
        
        // 装备新装备
        gameState.equipment[equipmentType] = itemName;
        this.removeItem(itemName, 1);
        this.applyEquipmentStats(equipmentData);
        
        GameSettings.showNotification(`装备了 ${itemName}`, 'success');
        GameManager.updateUI();
        return true;
    },
    
    // 应用装备属性
    applyEquipmentStats(equipment) {
        const char = gameState.character;
        
        if (equipment.attack) char.attack += equipment.attack;
        if (equipment.defense) char.defense += equipment.defense;
        if (equipment.strength) char.strength += equipment.strength;
        if (equipment.agility) char.agility += equipment.agility;
        if (equipment.intelligence) char.intelligence += equipment.intelligence;
        if (equipment.constitution) char.constitution += equipment.constitution;
        if (equipment.hp) char.maxHp += equipment.hp;
        if (equipment.mp) char.maxMp += equipment.mp;
    },
    
    // 移除装备属性
    removeEquipmentStats(itemName) {
        // 查找装备数据并移除属性
        for (const items of Object.values(GameData.equipment)) {
            if (items[itemName]) {
                const equipment = items[itemName];
                const char = gameState.character;
                
                if (equipment.attack) char.attack -= equipment.attack;
                if (equipment.defense) char.defense -= equipment.defense;
                if (equipment.strength) char.strength -= equipment.strength;
                if (equipment.agility) char.agility -= equipment.agility;
                if (equipment.intelligence) char.intelligence -= equipment.intelligence;
                if (equipment.constitution) char.constitution -= equipment.constitution;
                if (equipment.hp) char.maxHp -= equipment.hp;
                if (equipment.mp) char.maxMp -= equipment.mp;
                break;
            }
        }
    }
};