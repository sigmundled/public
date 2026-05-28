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
    {
        brand: 'Kverneland',
        catalogueGroups: [
            {
                name: 'Ploughs',
                productGroups: [
                    {
                        name: 'Reversible Ploughs',
                        products: [
                            '2500 i-Plough',
                            '3300 S Variomat',
                            '3500 S Variomat',
                            '4000 S Variomat',
                            'PW Variomat',
                            'US Variomat',
                            'UN Variomat'
                        ]
                    },
                    {
                        name: 'Semi-Mounted Reversible Ploughs',
                        products: [
                            '2500 S i-Plough',
                            '3500 M i-Plough',
                            '4500 M i-Plough',
                            '5500 M i-Plough',
                            'EG 100'
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
                        name: 'Deep Diggers',
                        products: [
                            'CLC Pro',
                            'Qualidisc Farmer',
                            'Sumo Trio'
                        ]
                    }
                ]
            },
            {
                name: 'Seeders & Drills',
                productGroups: [
                    {
                        name: 'Precision Drills',
                        products: [
                            'Optima F',
                            'Optima HD-II',
                            'Optima TF',
                            'Optima V',
                            'i-Planter F',
                            'i-Planter HD'
                        ]
                    },
                    {
                        name: 'Mechanical Drills',
                        products: [
                            'e-drill compact',
                            'e-drill maxi',
                            'S-drill',
                            'S-drill Pro',
                            'F-drill',
                            'F-drill Pro'
                        ]
                    },
                    {
                        name: 'Air Seeders',
                        products: [
                            'Spirit 300 F',
                            'Spirit 400 F',
                            'Spirit 600 F',
                            'Spirit 800 F',
                            'CLC Evolution'
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
                            'Qualidisc 300',
                            'Qualidisc 400',
                            'Qualidisc Farmer 300',
                            'Qualidisc Farmer 400',
                            'Qualidisc Pro 400',
                            'Qualidisc Pro 500'
                        ]
                    },
                    {
                        name: 'Stubble Cultivators',
                        products: [
                            'CLC Pro 300',
                            'CLC Pro 400',
                            'CLC Pro 500',
                            'CLC Evo 300',
                            'CLC Evo 400',
                            'CLC Evo 500'
                        ]
                    },
                    {
                        name: 'Subsoilers',
                        products: [
                            'Qualidrill',
                            'Sumo Trio',
                            'Sumo Quattro',
                            'Deep Till 150',
                            'Deep Till 200'
                        ]
                    },
                    {
                        name: 'Power Harrows',
                        products: [
                            'PW 100',
                            'PW 300',
                            'NG-M 300',
                            'NG-M 400',
                            'NG-M 500',
                            'NG-H 300',
                            'NG-H 400'
                        ]
                    },
                    {
                        name: 'Rollers',
                        products: [
                            'Packer Ring Roller',
                            'Furrow Press',
                            'Cambridge Roller'
                        ]
                    }
                ]
            },
            {
                name: 'Grassland',
                productGroups: [
                    {
                        name: 'Slurry Equipment',
                        products: [
                            'Exacta TL',
                            'FT 10',
                            'FT 14',
                            'FT 18',
                            'FT 22',
                            'GEEFORCE 10',
                            'GEEFORCE 14'
                        ]
                    },
                    {
                        name: 'Grass Harrows',
                        products: [
                            'GH 1000',
                            'GH 1500',
                            'GH 2000'
                        ]
                    }
                ]
            },
            {
                name: 'Electronics & Precision Farming',
                productGroups: [
                    {
                        name: 'Section Control',
                        products: [
                            'ISOBUS Section Control',
                            'GPS Section Control'
                        ]
                    },
                    {
                        name: 'Variable Rate Application',
                        products: [
                            'Variable Rate Seeding',
                            'Variable Rate Fertilising'
                        ]
                    },
                    {
                        name: 'Terminals & Displays',
                        products: [
                            'VT 200',
                            'VT 300',
                            'ISOBUS Terminal 12"'
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: 'Vicon',
        catalogueGroups: [
            {
                name: 'Mowers',
                productGroups: [
                    {
                        name: 'Disc Mowers',
                        products: [
                            'EXTRA 332XF',
                            'EXTRA 336T',
                            'EXTRA 340T',
                            'EXTRA 736T Vario',
                            'EXTRA 832T Vario',
                            'EXTRA 932T Vario',
                            'EXTRA 336F',
                            'EXTRA 436F'
                        ]
                    },
                    {
                        name: 'Mower Conditioners',
                        products: [
                            'EXTRA 632T',
                            'EXTRA 636T',
                            'EXTRA 690T GeoMow',
                            'EXTRA 732T',
                            'EXTRA 736T',
                            'EXTRA 840T GeoMow',
                            'EXTRA 632F',
                            'EXTRA 736F GeoMow'
                        ]
                    },
                    {
                        name: 'Triple Mowers',
                        products: [
                            'EXTRA 730T Triple',
                            'EXTRA 930T Triple',
                            'EXTRA 1030T Triple'
                        ]
                    }
                ]
            },
            {
                name: 'Tedders',
                productGroups: [
                    {
                        name: 'Single Rotor Tedders',
                        products: [
                            'ANDEX 503 F',
                            'ANDEX 703 F',
                            'ANDEX 905 F'
                        ]
                    },
                    {
                        name: 'Multi Rotor Tedders',
                        products: [
                            'ANDEX 1204 T',
                            'ANDEX 1504 T',
                            'ANDEX 2006 T',
                            'ANDEX 2506 T',
                            'ANDEX 3008 T'
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
                            'FANEX 551',
                            'FANEX 681',
                            'FANEX 902 T',
                            'FANEX 1002 T'
                        ]
                    },
                    {
                        name: 'Twin Rotor Rakes',
                        products: [
                            'FANEX 682 T',
                            'FANEX 882 T',
                            'FANEX 1082 T',
                            'FANEX 1282 T',
                            'FANEX 1482 T'
                        ]
                    },
                    {
                        name: 'Centre Delivery Rakes',
                        products: [
                            'FANEX 904 C',
                            'FANEX 1204 C',
                            'FANEX 1504 C'
                        ]
                    }
                ]
            },
            {
                name: 'Balers',
                productGroups: [
                    {
                        name: 'Fixed Chamber Balers',
                        products: [
                            'FixBale 500',
                            'FixBale 500 Smart',
                            'FixBale 500 Combi',
                            'FixBale 125',
                            'FixBale 145'
                        ]
                    },
                    {
                        name: 'Variable Chamber Balers',
                        products: [
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
                        name: 'Baler Wrappers',
                        products: [
                            'Fastbale',
                            'Combi 3100',
                            'Combi 3200 Plus'
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
                            'IDEFENDER+ 800',
                            'IDEFENDER+ 1600',
                            'IDEFENDER+ 2500',
                            'IDEFENDER+ 4000',
                            'Rotaflow FW',
                            'Rotaflow RW'
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
            }
        ]
    },
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
                            'iXtrack T4-36'
                        ]
                    },
                    {
                        name: 'Self-Propelled Sprayers',
                        products: [
                            'iXspray 24',
                            'iXspray 27',
                            'iXspray 30'
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
                            'TL Geospread 2500',
                            'TL Geospread 4000',
                            'Exacta CL EW 2500',
                            'Exacta CL EW 4000',
                            'Exacta TL EW 3200',
                            'Exacta TL EW 4200'
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
            }
        ]
    }
];
