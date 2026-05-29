/**
 * Product catalogue database for the Image Filename Sanitizer solution.
 * Source: ien.kverneland.com (Kverneland Group international catalogue).
 *
 * Structure:
 *   brand → catalogueGroups[] → productGroups[] → products[]
 *
 * Edit this file to add, remove, or update brands, catalogue groups,
 * product groups, and individual products.
 */

const CATALOGUE_DATA = [
    // ─────────────────────────────────────────────────────────────
    //  KVERNELAND
    // ─────────────────────────────────────────────────────────────
    {
        brand: 'Kverneland',
        catalogueGroups: [
            {
                name: 'Ploughs',
                productGroups: [
                    {
                        name: 'Mounted Reversible Ploughs',
                        products: [
                            '2500 S i-Plough',
                            '3300 S Variomat',
                            '3500 S Variomat',
                            '4000 S Variomat',
                            'PG 100',
                            'PW Variomat',
                            'UN Variomat',
                            'US Variomat'
                        ]
                    },
                    {
                        name: 'Semi-Mounted Reversible Ploughs',
                        products: [
                            '2500 i-Plough',
                            '3500 M i-Plough',
                            '4500 M i-Plough',
                            '5500 M i-Plough',
                            'EG 100',
                            'PLW 100'
                        ]
                    },
                    {
                        name: 'Conventional Ploughs',
                        products: [
                            'AB 85',
                            'LD 100',
                            'LE 85',
                            'LF 100',
                            'LG 100'
                        ]
                    },
                    {
                        name: 'Packers & Furrow Presses',
                        products: [
                            'Furrow Press Ring',
                            'Furrow Press Rubber',
                            'Packer Ring Pro',
                            'Cambridge Roller'
                        ]
                    }
                ]
            },
            {
                name: 'Tillage Tools',
                productGroups: [
                    {
                        name: 'Subsoilers',
                        products: [
                            'CLI Subsoiler',
                            'CLG II Subsoiler',
                            'CLG III Subsoiler',
                            'DTX Subsoiler'
                        ]
                    },
                    {
                        name: 'Universal Cultivators',
                        products: [
                            'Turbo',
                            'Turbo F',
                            'Turbo 1100 T',
                            'CTC'
                        ]
                    },
                    {
                        name: 'Stubble Cultivators',
                        products: [
                            'CLC Pro',
                            'CLC Pro F',
                            'CLC Pro T',
                            'CLC Evo',
                            'CLC Evo F',
                            'CLC Evo T',
                            'Enduro',
                            'Enduro Pro',
                            'Enduro F',
                            'Enduro Pro F',
                            'Enduro T',
                            'Enduro Pro T'
                        ]
                    },
                    {
                        name: 'Disc Harrows',
                        products: [
                            'Qualidisc 1100 L',
                            'Qualidisc Farmer',
                            'Qualidisc Farmer F',
                            'Qualidisc Farmer T',
                            'Qualidisc Pro',
                            'Qualidisc Pro F',
                            'Qualidisc Pro T',
                            'Qualidisc 21000 T'
                        ]
                    },
                    {
                        name: 'Power Harrows',
                        products: [
                            'NG-M S Series',
                            'NG-M H Series',
                            'NG-H 101 F30',
                            'NG-S 101 F35',
                            'PowerHarrow S Series',
                            'PowerHarrow M Series',
                            'PowerHarrow H Series'
                        ]
                    },
                    {
                        name: 'Seedbed Cultivators',
                        products: [
                            'NG 100',
                            'NG 200',
                            'NG 300',
                            'NG F',
                            'i-Till'
                        ]
                    },
                    {
                        name: 'Striptillers',
                        products: [
                            'Kultistrip',
                            'Kultistrip F'
                        ]
                    },
                    {
                        name: 'Rollers',
                        products: [
                            'Packer Ring Roller',
                            'Furrow Press Roller',
                            'Cambridge Roller',
                            'Heavy Roller'
                        ]
                    },
                    {
                        name: 'Flail Choppers',
                        products: [
                            'FX 45',
                            'FX 65',
                            'FX 85',
                            'FX 105'
                        ]
                    }
                ]
            },
            {
                name: 'Seeders',
                productGroups: [
                    {
                        name: 'Pneumatic Mounted Seed Drills',
                        products: [
                            'e-drill compact',
                            'e-drill maxi',
                            'e-drill maxi plus',
                            'f-drill compact',
                            'f-drill maxi',
                            'f-drill CB',
                            'f-drill CB F',
                            'Accord i-drill PRO'
                        ]
                    },
                    {
                        name: 'Combination Seed Drills',
                        products: [
                            'u-drill 3001',
                            'u-drill 4001',
                            'u-drill 6001',
                            'Satio 300',
                            'Satio 400',
                            'Satio 500 F',
                            'Satio 600 F',
                            'ts-drill'
                        ]
                    },
                    {
                        name: 'Precision Drills',
                        products: [
                            'Optima F',
                            'Optima HD',
                            'Optima HD-II',
                            'Optima TF',
                            'Optima V',
                            'i-Planter F',
                            'i-Planter HD',
                            'Monopill SE',
                            'Unicorn IV'
                        ]
                    },
                    {
                        name: 'Cover Crop & Special Seeders',
                        products: [
                            'Cover Crop Seeder',
                            'Grass Seeder',
                            'Under-sow Seeder'
                        ]
                    }
                ]
            },
            {
                name: 'Forage Equipment',
                productGroups: [
                    {
                        name: 'Disc Mowers',
                        products: [
                            '2316 M',
                            '2320 M',
                            '2324 M',
                            '2624 M',
                            '2628 M',
                            '2632 M',
                            '2828 M',
                            '2832 M',
                            '2836 M',
                            '2840 M'
                        ]
                    },
                    {
                        name: 'Front Mowers',
                        products: [
                            '2800 F',
                            '2828 F',
                            '2832 F',
                            '2832 FS'
                        ]
                    },
                    {
                        name: 'Mower Conditioners',
                        products: [
                            '3628 FT',
                            '3628 FN',
                            '3632 FT',
                            '3632 FR',
                            '3632 FN',
                            '3636 FT',
                            '3636 FR',
                            '4324 LR',
                            '4328 LT',
                            '4332 LT',
                            '4332 LR',
                            '4332 CT',
                            '4332 CR',
                            '4336 LT',
                            '4336 LR',
                            '4336 CT',
                            '4336 CR',
                            '4340 CT'
                        ]
                    },
                    {
                        name: 'Butterfly Mowers',
                        products: [
                            '5087 M',
                            '5090 MT BX',
                            '5095 M'
                        ]
                    },
                    {
                        name: 'Tedders',
                        products: [
                            'FANEX 504',
                            'FANEX 604',
                            'FANEX 764',
                            'FANEX 904',
                            'FANEX 1004',
                            'FANEX 1124',
                            'FANEX 1204',
                            'FANEX 1404',
                            'FANEX 1564 C'
                        ]
                    },
                    {
                        name: 'Rakes',
                        products: [
                            'ANDEX 314',
                            'ANDEX 370',
                            'ANDEX 424',
                            'ANDEX 644',
                            'ANDEX 724',
                            'ANDEX 824',
                            'ANDEX 1304',
                            'ANDEX 1505',
                            'ANDEX 1506',
                            'ANDEX 1515 C'
                        ]
                    },
                    {
                        name: 'Mergers',
                        products: [
                            'ROC 714',
                            'ROC 810',
                            'ROC 915',
                            'ROC 1220',
                            'RS 312',
                            'RS 330',
                            'RS 420',
                            'RS 450'
                        ]
                    },
                    {
                        name: 'Round Balers',
                        products: [
                            '6250 Plus',
                            '6500 F',
                            '6600 Plus',
                            '6700 Plus',
                            'FastBale Premium'
                        ]
                    },
                    {
                        name: 'Bale Wrappers',
                        products: [
                            '7510',
                            '7710',
                            '7730',
                            '7750',
                            '7760'
                        ]
                    }
                ]
            },
            {
                name: 'Crop Care',
                productGroups: [
                    {
                        name: 'Mounted Sprayers',
                        products: [
                            'iXter B 12',
                            'iXter B 16',
                            'iXter B 24',
                            'iXter A 12',
                            'iXter A 18',
                            'iXter A 24'
                        ]
                    },
                    {
                        name: 'Trailed Sprayers',
                        products: [
                            'iXtrack T3-24',
                            'iXtrack T3-27',
                            'iXtrack T4-27',
                            'iXtrack T4-30',
                            'iXtrack T4-36',
                            'iXtrack T6-27',
                            'iXtrack T6-30',
                            'iXtrack T6-36'
                        ]
                    },
                    {
                        name: 'Self-Propelled Sprayers',
                        products: [
                            'iXdrive 24',
                            'iXdrive 27',
                            'iXdrive 30',
                            'iXdrive 36'
                        ]
                    },
                    {
                        name: 'Fertiliser Spreaders',
                        products: [
                            'Exacta CL',
                            'Exacta CL EW',
                            'Exacta HL',
                            'Exacta TL',
                            'Exacta TL Geospread',
                            'Exacta TL EW',
                            'RO-M',
                            'RO-C',
                            'RO-XL',
                            'RO-EDW',
                            'RO-EDW Geospread',
                            'RO-XXL',
                            'RO-XXL Geospread iDC'
                        ]
                    },
                    {
                        name: 'Mechanical Weeding',
                        products: [
                            'Rotary Hoe',
                            'Weeder 3m',
                            'Weeder 6m',
                            'Weeder 9m'
                        ]
                    }
                ]
            },
            {
                name: 'Feeding Solutions',
                productGroups: [
                    {
                        name: 'Bale Choppers & Feeders',
                        products: [
                            '850',
                            '860',
                            'BX 180',
                            'BX 200'
                        ]
                    }
                ]
            },
            {
                name: 'Precision Farming',
                productGroups: [
                    {
                        name: 'Terminals & Displays',
                        products: [
                            'IsoMatch Tellus PRO',
                            'IsoMatch Tellus GO+',
                            'IsoMatch Tellus 1200'
                        ]
                    },
                    {
                        name: 'Task Control & Software',
                        products: [
                            'IsoMatch GeoControl',
                            'IsoMatch FarmCentre',
                            'IsoMatch Grip'
                        ]
                    },
                    {
                        name: 'GNSS & Connectivity',
                        products: [
                            'IsoMatch Global 2',
                            'IsoMatch Wireless',
                            'IsoMatch InLine'
                        ]
                    },
                    {
                        name: 'Camera & Diagnostic Tools',
                        products: [
                            'IsoMatch Eye',
                            'IsoMatch MultiEye',
                            'IsoMatch TopService',
                            'IsoMatch InDemo'
                        ]
                    }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────
    //  VICON
    // ─────────────────────────────────────────────────────────────
    {
        brand: 'Vicon',
        catalogueGroups: [
            {
                name: 'Mowers',
                productGroups: [
                    {
                        name: 'Rear Disc Mowers',
                        products: [
                            'EXTRA 100 F',
                            'EXTRA 200 F',
                            'EXTRA 300 F',
                            'EXTRA 332XF',
                            'EXTRA 336T',
                            'EXTRA 340T',
                            'EXTRA 400 F',
                            'EXTRA 436F',
                            'EXTRA 600 F'
                        ]
                    },
                    {
                        name: 'Front Disc Mowers',
                        products: [
                            'EXTRA 336F',
                            'EXTRA 340F'
                        ]
                    },
                    {
                        name: 'Mower Conditioners',
                        products: [
                            'EXTRA 632T',
                            'EXTRA 632F',
                            'EXTRA 636T',
                            'EXTRA 690T GeoMow',
                            'EXTRA 732T',
                            'EXTRA 736T',
                            'EXTRA 736F GeoMow',
                            'EXTRA 736T Vario',
                            'EXTRA 832T Vario',
                            'EXTRA 840T GeoMow',
                            'EXTRA 932T Vario'
                        ]
                    },
                    {
                        name: 'Triple & Butterfly Mowers',
                        products: [
                            'EXTRA 730T Triple',
                            'EXTRA 930T Triple',
                            'EXTRA 1030T Triple'
                        ]
                    },
                    {
                        name: 'Drum Mowers',
                        products: [
                            'Drum Mower 280',
                            'Drum Mower 320',
                            'Drum Mower 360'
                        ]
                    }
                ]
            },
            {
                name: 'Tedders',
                productGroups: [
                    {
                        name: 'Compact Tedders',
                        products: [
                            'FANEX 504',
                            'FANEX 604',
                            'FANEX 764'
                        ]
                    },
                    {
                        name: 'Mid-Range Tedders',
                        products: [
                            'FANEX 804',
                            'FANEX 904',
                            'FANEX 1004',
                            'FANEX 1124'
                        ]
                    },
                    {
                        name: 'Large Tedders',
                        products: [
                            'FANEX 1204',
                            'FANEX 1404',
                            'FANEX 1504',
                            'FANEX 1564 C'
                        ]
                    }
                ]
            },
            {
                name: 'Rakes',
                productGroups: [
                    {
                        name: 'Single Rotor Rakes',
                        products: [
                            'ANDEX 314',
                            'ANDEX 370',
                            'ANDEX 424',
                            'ANDEX 551',
                            'ANDEX 681'
                        ]
                    },
                    {
                        name: 'Twin Rotor Rakes',
                        products: [
                            'ANDEX 644',
                            'ANDEX 724',
                            'ANDEX 824',
                            'ANDEX 902 T',
                            'ANDEX 1002 T',
                            'ANDEX 1082 T',
                            'ANDEX ProLine',
                            'ANDEX CompactLine'
                        ]
                    },
                    {
                        name: 'Multi-Rotor Rakes',
                        products: [
                            'ANDEX 1304',
                            'ANDEX 1505',
                            'ANDEX 1506',
                            'ANDEX 1515 C'
                        ]
                    }
                ]
            },
            {
                name: 'Balers',
                productGroups: [
                    {
                        name: 'Fixed Chamber Round Balers',
                        products: [
                            'RF 125',
                            'RF 145',
                            'RF 235 OC',
                            'RF 2235 OC',
                            'FixBale 125',
                            'FixBale 145',
                            'FixBale 500',
                            'FixBale 500 Smart'
                        ]
                    },
                    {
                        name: 'Variable Chamber Round Balers',
                        products: [
                            'RV 1601',
                            'RV 2160',
                            'RV 2190',
                            'RV 4216 R',
                            'RV 4220 SC 25',
                            'RV 5200',
                            'RV 5200 Plus',
                            'RV 5210',
                            'RV 5210 Plus',
                            'RV 5220 Plus',
                            'RV 6200',
                            'RV 6310 Plus'
                        ]
                    },
                    {
                        name: 'Non-Stop Baler Wrappers',
                        products: [
                            'FastBale',
                            'FastBale Premium'
                        ]
                    },
                    {
                        name: 'Bale Wrappers',
                        products: [
                            'Combi 3100',
                            'Combi 3200 Plus',
                            'Satellite Wrapper 100',
                            'Satellite Wrapper 200',
                            'Turntable Wrapper 300'
                        ]
                    },
                    {
                        name: 'Square Balers',
                        products: [
                            'LSB 890',
                            'LSB 1270',
                            'LSB 1290'
                        ]
                    }
                ]
            },
            {
                name: 'Fertiliser Spreaders',
                productGroups: [
                    {
                        name: 'Twin Disc Spreaders',
                        products: [
                            'RO-C',
                            'RO-M',
                            'RO-M W PRO',
                            'RO-XL',
                            'RO-EDW',
                            'RO-EDW Geospread',
                            'RO-XXL',
                            'RO-XXL Geospread iDC'
                        ]
                    },
                    {
                        name: 'Pendulum Spreaders',
                        products: [
                            'Pendelmatic 3000',
                            'Pendelmatic 5000'
                        ]
                    }
                ]
            },
            {
                name: 'Sprayers',
                productGroups: [
                    {
                        name: 'Mounted Sprayers',
                        products: [
                            'iXter B 12',
                            'iXter B 16',
                            'iXter B 24',
                            'iXter A 12',
                            'iXter A 18',
                            'iXter A 24'
                        ]
                    },
                    {
                        name: 'Trailed Sprayers',
                        products: [
                            'iXtrack T3-24',
                            'iXtrack T3-27',
                            'iXtrack T4-27',
                            'iXtrack T4-30',
                            'iXtrack T4-36',
                            'iXtrack T6-27',
                            'iXtrack T6-30',
                            'iXtrack T6-36'
                        ]
                    },
                    {
                        name: 'Self-Propelled Sprayers',
                        products: [
                            'iXdrive 24',
                            'iXdrive 27',
                            'iXdrive 30',
                            'iXdrive 36'
                        ]
                    }
                ]
            },
            {
                name: 'Electronics',
                productGroups: [
                    {
                        name: 'Terminals & Displays',
                        products: [
                            'IsoMatch Tellus PRO',
                            'IsoMatch Tellus GO+',
                            'IsoMatch Tellus 1200'
                        ]
                    },
                    {
                        name: 'Task Control & Precision',
                        products: [
                            'IsoMatch GeoControl',
                            'IsoMatch FarmCentre',
                            'IsoMatch Grip'
                        ]
                    },
                    {
                        name: 'GNSS & Connectivity',
                        products: [
                            'IsoMatch Global 2',
                            'IsoMatch Wireless',
                            'IsoMatch InLine'
                        ]
                    }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────
    //  KUBOTA (implements via Kverneland Group)
    // ─────────────────────────────────────────────────────────────
    {
        brand: 'Kubota',
        catalogueGroups: [
            {
                name: 'Sprayers',
                productGroups: [
                    {
                        name: 'Mounted Sprayers',
                        products: [
                            'iXter B 12',
                            'iXter B 16',
                            'iXter B 24',
                            'iXter A 12',
                            'iXter A 18',
                            'iXter A 24'
                        ]
                    },
                    {
                        name: 'Trailed Sprayers',
                        products: [
                            'iXtrack T3-24',
                            'iXtrack T3-27',
                            'iXtrack T4-27',
                            'iXtrack T4-30',
                            'iXtrack T4-36',
                            'iXtrack T6-27',
                            'iXtrack T6-30',
                            'iXtrack T6-36'
                        ]
                    },
                    {
                        name: 'Self-Propelled Sprayers',
                        products: [
                            'iXdrive 24',
                            'iXdrive 27',
                            'iXdrive 30',
                            'iXdrive 36'
                        ]
                    }
                ]
            },
            {
                name: 'Fertiliser Spreaders',
                productGroups: [
                    {
                        name: 'Mounted Spreaders',
                        products: [
                            'Exacta CL EW 1200',
                            'Exacta CL EW 2500',
                            'Exacta CL EW 4000',
                            'Exacta TL EW 3200',
                            'Exacta TL EW 4200',
                            'Exacta TL Geospread 2500',
                            'Exacta TL Geospread 4000'
                        ]
                    },
                    {
                        name: 'Trailed Spreaders',
                        products: [
                            'Exacta TL Trailed 8000',
                            'Exacta TL Trailed 12000'
                        ]
                    }
                ]
            },
            {
                name: 'Soil Tillage',
                productGroups: [
                    {
                        name: 'Disc Harrows',
                        products: [
                            'Qualidisc Farmer',
                            'Qualidisc Farmer F',
                            'Qualidisc Pro',
                            'Qualidisc Pro T'
                        ]
                    },
                    {
                        name: 'Cultivators',
                        products: [
                            'CLC Pro',
                            'CLC Evo',
                            'Enduro Pro'
                        ]
                    },
                    {
                        name: 'Power Harrows',
                        products: [
                            'PowerHarrow M Series',
                            'PowerHarrow H Series',
                            'PowerHarrow S Series'
                        ]
                    }
                ]
            },
            {
                name: 'Seeding',
                productGroups: [
                    {
                        name: 'Seed Drills',
                        products: [
                            'e-drill compact',
                            'e-drill maxi',
                            'Accord i-drill PRO'
                        ]
                    },
                    {
                        name: 'Precision Drills',
                        products: [
                            'Optima F',
                            'Optima HD',
                            'Optima TF'
                        ]
                    }
                ]
            },
            {
                name: 'Forage',
                productGroups: [
                    {
                        name: 'Mowers',
                        products: [
                            '2624 M',
                            '2832 M',
                            '3632 FT',
                            '3636 FT'
                        ]
                    },
                    {
                        name: 'Round Balers',
                        products: [
                            '6500 F',
                            '6600 Plus',
                            '6700 Plus'
                        ]
                    }
                ]
            }
        ]
    }
];
