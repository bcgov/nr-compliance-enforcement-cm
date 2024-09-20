--
-- INSERT sector_code values
--
INSERT INTO
  case_management.sector_code (
    sector_code,
    short_description,
    long_description,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
VALUES
  (
    'ABRASIVESI',
    'ABRASIVESI',
    'Abrasives Industry',
    10,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'AGRICULOP',
    'AGRICULOP',
    'Agricultural Operations',
    20,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ALUMINUMPR',
    'ALUMINUMPR',
    'Aluminum and Aluminum Alloy Products Industry',
    30,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ANTICHEMM',
    'ANTICHEMM',
    'Antisapstain Chemicals Management',
    40,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'AQUALANDI',
    'AQUALANDI',
    'Aquaculture - Land-based Industry',
    50,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'AQUAMARINE',
    'AQUAMARINE',
    'Aquaculture - Marine-based Industry',
    60,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ASBESTOSMI',
    'ASBESTOSMI',
    'Asbestos Mining Industry',
    70,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ASPHALTPI',
    'ASPHALTPI',
    'Asphalt Plant Industry',
    80,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ASPHALTROO',
    'ASPHALTROO',
    'Asphalt Roof Manufacturing Industry',
    90,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'BEVERAGEIN',
    'BEVERAGEIN',
    'Beverage Industry',
    100,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'BIOTECHIN',
    'BIOTECHIN',
    'Biotechnology Industry',
    110,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'BURNVEGED',
    'BURNVEGED',
    'Burning of Vegetative Debris',
    120,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'BURNWASTE',
    'BURNWASTE',
    'Burning or Incineration of Waste',
    130,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'BURNWOODR',
    'BURNWOODR',
    'Burning or Incineration of Wood Residue',
    140,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CEMENTLIME',
    'CEMENTLIME',
    'Cement and Lime Manufacturing Industry',
    150,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CHEMPRIND',
    'CHEMPRIND',
    'Chemical and Chemical Products Industry',
    160,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CLAYINDUST',
    'CLAYINDUST',
    'Clay Industry',
    170,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'COALGASIN',
    'COALGASIN',
    'Coalbed Gas Exploration and Production Industry',
    180,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'COMWASTEIN',
    'COMWASTEIN',
    'Commercial Waste Management or Waste Disposal Industry',
    190,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'COMPOSTIN',
    'COMPOSTIN',
    'Composting Operations',
    200,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CONCRETEP',
    'CONCRETEP',
    'Concrete and Concrete Products Industry',
    210,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CONTSITEM',
    'CONTSITEM',
    'Contaminated Site Contaminant Management',
    220,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'DAIRYPROD',
    'DAIRYPROD',
    'Dairy Products Industry',
    230,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'DEEPWELLD',
    'DEEPWELLD',
    'Deep Well Disposal',
    240,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ELECPRODI',
    'ELECPRODI',
    'Electrical or Electronic Products Industry',
    250,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ELECPOWER',
    'ELECPOWER',
    'Electrical Power Industry',
    260,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'FISHPRODI',
    'FISHPRODI',
    'Fish Products Industry',
    270,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'FLOURFEED',
    'FLOURFEED',
    'Flour Prepared Cereal Food and Feed Industry',
    280,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'FRUITVEGI',
    'FRUITVEGI',
    'Fruit and Vegetable Processing Industry',
    290,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'GLASSPROD',
    'GLASSPROD',
    'Glass and Glass Products Industry',
    300,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'HAZWASTEM',
    'HAZWASTEM',
    'Hazardous Waste Management',
    310,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'INDFASTEN',
    'INDFASTEN',
    'Industrial Fastener Industry',
    320,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'NONHAZWST',
    'NONHAZWST',
    'Industrial Non-hazardous Waste Landfills',
    330,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MEATBYPROD',
    'MEATBYPROD',
    'Meat By-product Processing Industry',
    340,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'METALPROC',
    'METALPROC',
    'Metal Processing and Metal Products Manufacturing Industry',
    350,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'METALSMEL',
    'METALSMEL',
    'Metal Smelting Iron and Steel Foundry and Metal Refining Industry',
    360,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MININGCOA',
    'MININGCOA',
    'Mining and Coal Mining Industry',
    370,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MUNSEWMAN',
    'MUNSEWMAN',
    'Municipal Sewage Management',
    380,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MUNSOLWST',
    'MUNSOLWST',
    'Municipal Solid Waste Management',
    390,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MUNWASTEI',
    'MUNWASTEI',
    'Municipal Waste Incineration or Burning Industry',
    400,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'NORADMATM',
    'NORADMATM',
    'Naturally Occurring Radioactive Materials Management',
    410,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'NONMETMIN',
    'NONMETMIN',
    'Non-Metallic Mineral Products Industry',
    420,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'OILNATGASL',
    'OILNATGASL',
    'Oil and Natural Gas Industry - Large',
    430,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'OILNATGSS',
    'OILNATGSS',
    'Oil and Natural Gas Industry - Small',
    440,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'OZONEMANG',
    'OZONEMANG',
    'Ozone Depleting Substances and other Halocarbons Management',
    450,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PAPERINDU',
    'PAPERINDU',
    'Paper Industry',
    460,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PAPERBOAR',
    'PAPERBOAR',
    'Paperboard Industry',
    470,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PARTWAFAI',
    'PARTWAFAI',
    'Particle and Wafer Board Industry',
    480,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PETROSTOR',
    'PETROSTOR',
    'Petroleum Storage',
    490,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PIPETRANA',
    'PIPETRANA',
    'Pipeline Transport Industry with Approved Operating Plan',
    500,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PIPETRANI',
    'PIPETRANI',
    'Pipeline Transport Industry',
    510,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PLACERMIN',
    'PLACERMIN',
    'Placer Mining Industry',
    520,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PLASTRESI',
    'PLASTRESI',
    'Plastic and Synthetic Resin Manufacturing Industry',
    530,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PLASTCOMP',
    'PLASTCOMP',
    'Plastics and Composite Products Industry',
    540,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'POULTRYPR',
    'POULTRYPR',
    'Poultry Processing Industry',
    550,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PRODSTORAG',
    'PRODSTORAG',
    'Product Storage - Bulk Solids',
    560,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PULPINDUST',
    'PULPINDUST',
    'Pulp Industry',
    570,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'REFPETPRO',
    'REFPETPRO',
    'Refined Petroleum and Coal Products Industry',
    580,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'SGENRODEN',
    'SGENRODEN',
    'SECOND-GENERATION ANTICOAGULANT RODENTICIDES-GENERAL',
    590,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'SLAUGHTER',
    'SLAUGHTER',
    'SLAUGHTER Industry',
    600,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'SOILENHAN',
    'SOILENHAN',
    'Soil Enhancement Using Wastes',
    610,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'SUGARPROD',
    'SUGARPROD',
    'Sugar Processing and Refining Industry',
    620,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRAERGEN',
    'USRAERGEN',
    'user/service- AERIAL- GENERAL',
    630,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRAGRGEN',
    'USRAGRGEN',
    'user/service- AGRICULTURE GENERAL',
    640,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRAGRICU',
    'USRAGRICU',
    'user/service- AGRICULTURE',
    650,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRAGGENE',
    'USRAGGENE',
    'user/service- AGRICULTURE-GENERAL',
    660,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORENU',
    'USRFORENU',
    'user/service- FORESTRY- NURSERY',
    670,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORE50H',
    'USRFORE50H',
    'user/service- FORESTRY PESTICIDE USE LESS THAN 50 HA PER YEAR',
    680,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORE500',
    'USRFORE500',
    'user/service- FORESTRY PESTICIDE USE LESS THAN 500 HA PER YEAR',
    690,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFOREMOR',
    'USRFOREMOR',
    'user/service- FORESTRY PESTICIDE USE ON MORE THAN 500 HA PER YEAR',
    700,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFUMCON',
    'USRFUMCON',
    'user/service- FUMIGATION- CONTAINER',
    710,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFUMSHS',
    'USRFUMSHS',
    'user/service- FUMIGATION- SHIPS & STRUCTURESFUMIGATION- SOIL',
    720,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRINDPAVE',
    'USRINDPAVE',
    'user/service- INDUSTRIAL VEGETATION & NOXIOUS WEED- PAVERS',
    730,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRINDGEN',
    'USRINDGEN',
    'user/service- INDUSTRIAL VEGETATION & NOXIOUS WEED-GENERAL',
    740,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRLANDGEN',
    'USRLANDGEN',
    'user/service- LANDSCAPE- GENERAL',
    750,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRMOSBIT',
    'USRMOSBIT',
    'user/service- MOSQUITO & BITING FLY',
    760,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRMOSAEBA',
    'USRMOSAEBA',
    'user/service- MOSQUITO- AERIAL APPLICATION OF GRANULAR BACTERIAL PESTICIDES',
    770,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRMOSGRBA',
    'USRMOSGRBA',
    'user/service- MOSQUITO- GROUND APPLICATION OF BACTERIAL PESTICIDES & GROWTH REGULATORS',
    780,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRNETTRE',
    'USRNETTRE',
    'user/service- NET TREATMENT PRODUCTS',
    790,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRNOXGEN',
    'USRNOXGEN',
    'user/service- NOXIOUS WEED- GENERAL',
    800,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRPESTNS',
    'USRPESTNS',
    'user/service- PESTICIDE USER- NON-SERVICE',
    810,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRPESTPL',
    'USRPESTPL',
    'user/service- PESTICIDE USER- PUBLIC LAND',
    820,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRPESTSE',
    'USRPESTSE',
    'user/service- PESTICIDE USER- SERVICE',
    830,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRRESTBE',
    'USRRESTBE',
    'user/service- RESTRICTED TO COMMERCIAL BEEKEEPING PRODUCTS',
    840,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRSTRGEN',
    'USRSTRGEN',
    'user/service- STRUCTURAL- GENERAL',
    850,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRSTRWOO',
    'USRSTRWOO',
    'user/service- STRUCTURAL- INDUSTRIAL WOOD PRESERVATION',
    860,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORMAG',
    'USRFORMAG',
    'user/service-FORESTRY- MANAGEMENT; GENERAL',
    870,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORMNB',
    'USRFORMNB',
    'user/service-FORESTRY- MANAGEMENT; NON-BROADCAST',
    880,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORNU2',
    'USRFORNU2',
    'user/service-FORESTRY- NURSERY',
    890,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFORSEO',
    'USRFORSEO',
    'user/service-FORESTRY- SEED ORCHARD',
    900,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'USRFUMCO2',
    'USRFUMCO2',
    'user/service-FUMIGATION- C02',
    910,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VEHDISREC',
    'VEHDISREC',
    'Vehicle Dismantling and Recycling Industry',
    920,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VEHINDPAR',
    'VEHINDPAR',
    ' Vehicle Industrial Machinery and Parts and Accessories Manufacturing Industry',
    930,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VENDDOM100',
    'VENDDOM100',
    'vendor- DOMESTIC AND UP TO 100 KG COMMERCIAL PESTICIDES',
    940,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VENDGENERA',
    'VENDGENERA',
    'vendor- GENERAL',
    950,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VENDGENCO',
    'VENDGENCO',
    'vendor- GENERAL; COMMERCIAL PESTICIDES',
    960,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VENDGENDOM',
    'VENDGENDOM',
    'vendor- GENERAL; DOMESTIC PESTICIDES',
    970,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VENDGENLAN',
    'VENDGENLAN',
    'vendor- GENERAL; DOMESTIC PESTICIDES- LANDSCAPE- GENERAL',
    980,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'VENEERPLY',
    'VENEERPLY',
    'Veneer and Plywood Industry',
    990,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'WOODPRIMA',
    'WOODPRIMA',
    'Wood Processing Industry - Primary',
    1000,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'WOODSECON',
    'WOODSECON',
    'Wood Processing Industry - Secondary',
    1010,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'WOODTREIN',
    'WOODTREIN',
    'Wood Treatment Industry',
    1020,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- INSERT schedule_code values
--
INSERT INTO
  case_management.schedule_code (
    schedule_code,
    short_description,
    long_description,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
VALUES
  (
    'WDR1',
    'WDR schedule 1',
    'WDR schedule 1',
    10,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'WDR2',
    'WDR schedule 2',
    'WDR schedule 2',
    20,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'OTHER',
    'Other',
    'Other',
    30,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'IPM',
    'IPM sector type',
    'IPM sector type',
    40,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- INSERT new action_type_code values
--
INSERT INTO
  case_management.action_type_code (
    action_type_code,
    short_description,
    long_description,
    active_ind,
    create_user_id,
    create_utc_timestamp
  )
VALUES
  (
    'CEEBACTION',
    'CEEB Actions',
    'CEEB Actions',
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- INSERT new action_code values
--
INSERT INTO
  case_management.action_code (
    action_code,
    short_description,
    long_description,
    active_ind,
    create_user_id,
    create_utc_timestamp
  )
VALUES
  (
    'FWDLEADAGN',
    'FWDLEADAGN',
    'Forward to lead agency',
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'RESPNFA',
    'RESPNFA',
    'Responded - no further action',
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'RESPAUTO',
    'RESPAUTO',
    'Responded - auto-response/ed/promotion',
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'RESPREC',
    'RESPREC',
    'Responded - recommend for inspection',
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- INSERT new action_type_action_xref values
--
INSERT INTO
  case_management.action_type_action_xref (
    action_type_code,
    action_code,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp
  )
VALUES
  (
    'CEEBACTION',
    'FWDLEADAGN',
    1,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CEEBACTION',
    'RESPNFA',
    2,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CEEBACTION',
    'RESPAUTO',
    3,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'CEEBACTION',
    'RESPREC',
    4,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- INSERT non_compliance_decision_matrix_code values
--
INSERT INTO
  case_management.non_compliance_decision_matrix_code (
    non_compliance_decision_matrix_code,
    short_description,
    long_description,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
VALUES
  (
    'INCOMP',
    '0 In Compliance',
    '0 In Compliance',
    10,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'NOIMPCT',
    '1 No impact likely',
    '1 No impact likely',
    20,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MINIMPCT',
    '2 Minor temporary impact likely',
    '2 Minor temporary impact likely',
    30,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'MODIMPCT',
    '3 Moderate temporary impact likely',
    '3 Moderate temporary impact likely',
    40,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'SIGIMPCT',
    '4 Significant impact likely',
    '4 Significant impact likely',
    50,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'SVRIMPCT',
    '5 Severe human health impact demonstrated/likely',
    '5 Severe human health impact demonstrated/likely',
    60,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'ND',
    'Not determined',
    'Not determined',
    70,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- INSERT discharge_code values
--
INSERT INTO
  case_management.discharge_code (
    discharge_code,
    short_description,
    long_description,
    display_order,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
VALUES
  (
    'AIR_BURN',
    'AIR_BURN',
    'Air – burning',
    10,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'AIR_ODOUR',
    'AIR_ODOUR',
    'Air – odour',
    20,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'AIR_EMSSN',
    'AIR_EMSSN',
    'Air – emission',
    30,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'AIR_DST',
    'AIR_DST',
    'Air – dust',
    40,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'EFFLNT',
    'EFFLNT',
    'Effluent',
    50,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'RFS_DMP',
    'RFS_DMP',
    'Refuse – Dumping',
    60,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'RFS_OTHR',
    'RFS_OTHR',
    'Refuse - Other',
    70,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ),
  (
    'PSTCD',
    'PSTCD',
    'Pesticides',
    80,
    'Y',
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- add new EPO agency code
--
insert into
  case_management.agency_code (
    agency_code,
    short_description,
    long_description,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
values
  (
    'EPO',
    'CEEB',
    'Compliance and Environmental Enforcement Branch',
    true,
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;

--
-- add new ERS case_code 
--
insert into
  case_management.case_code (
    case_code,
    short_description,
    long_description,
    active_ind,
    create_user_id,
    create_utc_timestamp,
    update_user_id,
    update_utc_timestamp
  )
values
  (
    'ERS',
    'Enforcement Complaint',
    'Enforcement Complaint',
    true,
    CURRENT_USER,
    CURRENT_TIMESTAMP,
    CURRENT_USER,
    CURRENT_TIMESTAMP
  ) ON CONFLICT DO NOTHING;