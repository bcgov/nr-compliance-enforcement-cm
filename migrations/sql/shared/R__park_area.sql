-- Initial insert of park areas
INSERT INTO shared.park_area
        (name,
         region_name,
         create_user_id,
         create_utc_timestamp,
         update_user_id,
         update_utc_timestamp)
VALUES
        -- WC South Island
        ('South Gulf Islands',     'WC South Island', user, now(), user, now()),
        ('Cowichan',               'WC South Island', user, now(), user, now()),
        ('Juan de Fuca',           'WC South Island', user, now(), user, now()),

        -- WC Mid Vancouver Island-HG Area
        ('Arrowsmith',             'WC Mid Vancouver Island-HG Area', user, now(), user, now()),
        ('Clayoquot',              'WC Mid Vancouver Island-HG Area', user, now(), user, now()),
        ('Haida Gwaii',            'WC Mid Vancouver Island-HG Area', user, now(), user, now()),
        ('Von Donop',              'WC Mid Vancouver Island-HG Area', user, now(), user, now()),

        -- WC North Island-SCC Area
        ('Strathcona',             'WC North Island-SCC Area', user, now(), user, now()),
        ('Nootka',                 'WC North Island-SCC Area', user, now(), user, now()),
        ('Cape Scott',             'WC North Island-SCC Area', user, now(), user, now()),
        ('South Central Coast',    'WC North Island-SCC Area', user, now(), user, now()),
        ('Miracle Beach',          'WC North Island-SCC Area', user, now(), user, now()),

        -- SC Lower Mainland
        ('North Fraser Area',      'SC Lower Mainland', user, now(), user, now()),
        ('South Fraser Area',      'SC Lower Mainland', user, now(), user, now()),
        ('Vancouver Area',         'SC Lower Mainland', user, now(), user, now()),
        ('Howe Sound Area',        'SC Lower Mainland', user, now(), user, now()),

        -- SC Sea to Sky
        ('Sunshine Coast',         'SC Sea to Sky', user, now(), user, now()),
        ('Pemberton',              'SC Sea to Sky', user, now(), user, now()),
        ('Squamish',               'SC Sea to Sky', user, now(), user, now()),
        ('Garibaldi South',        'SC Sea to Sky', user, now(), user, now()),

        -- Cariboo-Chilcotin Coast
        ('South Chilcotin',        'Cariboo-Chilcotin Coast', user, now(), user, now()),
        ('Bowron',                 'Cariboo-Chilcotin Coast', user, now(), user, now()),
        ('Northern Forests',       'Cariboo-Chilcotin Coast', user, now(), user, now()),
        ('North Chilcotin',        'Cariboo-Chilcotin Coast', user, now(), user, now()),
        ('Central Coast',          'Cariboo-Chilcotin Coast', user, now(), user, now()),
        ('Bella Coola',            'Cariboo-Chilcotin Coast', user, now(), user, now()),

        -- Thompson
        ('Southern Rivers',        'Thompson', user, now(), user, now()),
        ('Grasslands',             'Thompson', user, now(), user, now()),
        ('Western Mountains',      'Thompson', user, now(), user, now()),
        ('Eastern Lakes',          'Thompson', user, now(), user, now()),

        -- Kootenay Region
        ('Arrow',                  'Kootenay Region', user, now(), user, now()),
        ('East Kootenay South',    'Kootenay Region', user, now(), user, now()),
        ('Kootenay Lake',          'Kootenay Region', user, now(), user, now()),
        ('East Kootenay North',    'Kootenay Region', user, now(), user, now()),

        -- Okanagan
        ('East Okanagan',          'Okanagan', user, now(), user, now()),
        ('North Okanagan',         'Okanagan', user, now(), user, now()),
        ('South Okanagan',         'Okanagan', user, now(), user, now()),
        ('West Okanagan',          'Okanagan', user, now(), user, now()),

        -- Skeena East
        ('Babine',                 'Skeena East', user, now(), user, now()),
        ('Tweedsmuir North',       'Skeena East', user, now(), user, now()),
        ('Stikine',                'Skeena East', user, now(), user, now()),
        ('Atlin/Tatshenshini',     'Skeena East', user, now(), user, now()),

        -- Skeena West
        ('Lakelse-Douglas Channel','Skeena West', user, now(), user, now()),
        ('Skeena-Nass',            'Skeena West', user, now(), user, now()),
        ('North Coast',            'Skeena West', user, now(), user, now()),

        -- Omineca
        ('Omineca',                'Omineca', user, now(), user, now()),
        ('Robson',                 'Omineca', user, now(), user, now()),
        ('Upper Fraser',           'Omineca', user, now(), user, now()),

        -- Peace
        ('Liard',                  'Peace', user, now(), user, now()),
        ('Peace',                  'Peace', user, now(), user, now())

ON CONFLICT DO NOTHING;


-- Initial load of park area mappings

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9554', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9868', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9869', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0384', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0237', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0104', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0529', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0021', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0198', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0267', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9867', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0382', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0322', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0044', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0155', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3017', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3128', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3037', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3016', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3094', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3018', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3067', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3132', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'SOUTH GULF ISLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0383', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0113', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6161', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0210', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9229', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9959', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9474', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0003', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0106', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0037', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9748', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0154', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0295', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0137', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3113', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4460', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3112', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3054', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'COWICHAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0096', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9398', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0240', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0009', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3097', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4361', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3083', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3066', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC South Island'
  AND  pa.name ILIKE 'JUAN de FUCA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0226', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0029', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0118', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0635', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0310', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0030', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0039', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0231', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0133', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0043', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0193', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0301', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0366', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3117', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9743', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4455', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4471', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'ARROWSMITH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9507', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9500', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9499', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9497', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0269', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0196', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9493', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9494', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9504', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9503', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0050', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0182', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0031', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9540', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9495', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9501', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0296', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9498', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5042', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0517', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3024', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3001', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3105', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3090', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'CLAYOQUOT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0321', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0562', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0569', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0559', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0563', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0564', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0566', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0567', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0570', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0571', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0572', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0560', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3052', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3093', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3010', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3009', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3045', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'HAIDA GWAII'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0633', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0048', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0187', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9870', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0292', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0632', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0634', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC Mid Vancouver Island-HG Area'
  AND  pa.name ILIKE 'VON DONOP'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0220', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0087', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0313', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0001', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0348', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0188', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0036', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0180', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4337', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6081', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'STRATHCONA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9745', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8779', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9209', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0339', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8778', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9147', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0028', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9746', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0189', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0190', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9749', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0374', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6111', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9459', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9752', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8782', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9753', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0631', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0511', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3109', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3075', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3129', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3014', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3119', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'NOOTKA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0250', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9469', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8774', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0450', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9747', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9466', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0472', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9465', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9532', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9464', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0377', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0283', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '2115', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3013', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3012', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3126', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9744', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3123', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3125', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3118', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3011', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3122', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3124', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'CAPE SCOTT'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0520', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0391', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0390', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0223', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0215', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1086', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1024', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1025', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1026', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1023', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1028', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1031', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1065', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1008', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1049', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1068', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1038', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1039', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1041', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1000', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1075', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1058', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1059', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1062', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1021', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1064', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1069', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1070', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1072', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3120', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3040', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3111', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'SOUTH CENTRAL COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0411', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9512', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6093', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0264', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0045', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0131', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0265', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9750', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0109', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9767', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9476', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9506', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0412', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9754', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0243', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0367', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9751', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3004', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'WC North Island-SCC Area'
  AND  pa.name ILIKE 'MIRACLE BEACH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0330', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0150', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0081', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0008', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0245', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9824', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6998', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0122', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0200', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5025', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0555', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3076', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3131', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'NORTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0166', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0258', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0124', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0335', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0336', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0351', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0041', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0151', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0290', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0072', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0158', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0261', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3098', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3116', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9841', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3089', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'SOUTH FRASER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9509', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'VANCOUVER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0015', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'VANCOUVER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0023', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'VANCOUVER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9508', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'VANCOUVER AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0049', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0278', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0365', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0116', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9508', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0314', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3048', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Lower Mainland'
  AND  pa.name ILIKE 'HOWE SOUND AREA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6301', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0372', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0228', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0252', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0469', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0203', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0388', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0392', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9825', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6197', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6268', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9761', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9765', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0294', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0221', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0173', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0040', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0373', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0145', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0379', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0303', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9763', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9544', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0375', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9460', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0376', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9762', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3028', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3002', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0475', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SUNSHINE COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0152', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9565', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0381', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0402', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0007', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0363', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0179', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9556', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0561', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0552', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0557', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0546', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0553', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0558', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'PEMBERTON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0414', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0242', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9451', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9768', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0141', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0331', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6328', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9764', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0616', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0545', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0554', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0556', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3069', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'SQUAMISH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0007', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'GARIBALDI SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0090', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'SC Sea to Sky'
  AND  pa.name ILIKE 'GARIBALDI SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9712', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6900', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0334', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9688', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6987', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0063', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9723', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0306', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0069', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6865', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0046', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9694', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0075', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6878', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0353', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3092', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3088', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3003', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9458', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'SOUTHERN RIVERS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9755', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6860', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9719', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9720', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9691', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9687', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9726', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0071', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0275', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9731', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0127', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9710', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9383', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9695', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9218', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6892', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9696', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9715', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9596', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4433', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3110', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3029', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'GRASSLANDS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9689', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9567', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0623', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9717', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9690', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0624', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9721', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0626', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0369', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0082', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0183', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9727', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9734', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0233', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9066', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0408', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9738', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9739', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0627', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9736', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0500', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'WESTERN MOUNTAINS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0361', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6648', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9582', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0085', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0551', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0457', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0276', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9693', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0447', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0281', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0089', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0300', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0212', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0449', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0123', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0167', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0080', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Thompson'
  AND  pa.name ILIKE 'EASTERN LAKES'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0308', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0323', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0051', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9553', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0010', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0017', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0404', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0324', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0232', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0110', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0156', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0202', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0327', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9960', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3032', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3031', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'ARROW'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0338', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0120', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0102', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0253', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0121', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9680', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9185', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0065', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0235', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0144', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0105', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0108', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9434', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0112', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0256', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0282', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0079', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9773', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3104', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY SOUTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0169', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0185', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0216', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0174', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0311', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9551', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0052', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0004', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0357', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0012', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9550', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0163', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9435', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0164', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9552', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'KOOTENAY LAKE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0206', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0172', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0362', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9681', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0061', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0034', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0293', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0130', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0005', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0098', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0025', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0114', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0247', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0053', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0287', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '7211', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4984', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3020', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3056', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3019', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3026', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Kootenay Region'
  AND  pa.name ILIKE 'EAST KOOTENAY NORTH'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0527', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0056', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0456', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0225', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0244', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0528', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9549', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9548', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0442', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0319', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0066', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0236', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0446', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0259', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0153', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9711', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0440', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5024', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0471', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3034', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3051', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3006', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3005', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'EAST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4104', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0086', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0139', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8697', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0277', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0378', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0453', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0241', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0020', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0468', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0143', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0445', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9335', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0027', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0463', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0467', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6610', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9518', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3077', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3108', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3049', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3042', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3043', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3061', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3030', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'NORTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0307', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0035', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0201', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9213', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0142', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0064', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0218', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0073', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0054', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0474', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0272', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0462', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0204', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6547', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0077', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9587', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5018', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0464', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '6624', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3033', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3100', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3130', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3007', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'SOUTH OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0119', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0058', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0199', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0033', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0011', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0022', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0146', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0076', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4982', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0598', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0448', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3027', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Okanagan'
  AND  pa.name ILIKE 'WEST OKANAGAN'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0482', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0483', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0484', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0485', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8350', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4382', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0067', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0070', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8966', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0405', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0488', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0489', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9601', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0407', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8379', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0481', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5040', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8345', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0492', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1094', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1003', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1125', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1007', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1092', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1091', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9457', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1118', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1014', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1017', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1001', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1012', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1105', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1123', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1006', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1009', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1116', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1010', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1018', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1015', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1110', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1111', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1113', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3025', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3114', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'LAKELSE-DOUGLAS CHANNEL'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0386', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8814', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0062', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0340', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0038', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9782', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0486', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0358', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8741', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9077', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0490', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5039', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5041', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0491', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0487', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1088', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0577', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3932', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5030', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0596', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1098', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3115', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3063', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'SKEENA-NASS'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0299', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0397', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0401', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0403', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0162', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1002', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1122', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1095', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1089', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1011', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1096', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1097', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1100', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1078', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1093', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1099', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1114', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1101', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1022', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1102', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1103', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1004', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1090', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1104', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1106', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1109', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1112', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1115', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1119', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1120', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1117', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '1121', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3133', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Skeena West'
  AND  pa.name ILIKE 'NORTH COAST'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0055', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0251', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0435', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0177', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9597', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0436', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0437', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9808', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9809', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9810', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9864', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0518', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9812', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0234', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9793', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0370', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9658', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0230', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0406', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9118', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0317', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0078', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9796', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5027', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3071', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3087', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3036', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3085', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3091', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3041', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3038', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'OMINECA'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0415', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0416', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9802', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0002', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0325', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9034', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0385', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0425', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4214', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0422', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9461', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4983', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9794', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9801', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9805', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0509', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5043', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5029', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9821', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5037', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3084', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3082', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3039', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'ROBSON'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9453', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3931', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0115', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9855', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0318', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0355', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9792', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9780', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8053', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9795', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8796', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0345', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0229', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9815', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0305', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9953', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9779', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5044', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5031', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3086', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3079', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3060', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3134', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3078', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3072', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Omineca'
  AND  pa.name ILIKE 'UPPER FRASER'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9828', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8297', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0426', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9797', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9829', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9820', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0254', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8969', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0092', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5034', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0328', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0093', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0341', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8288', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0280', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8299', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9830', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9843', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8277', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0094', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8284', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4985', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5015', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9790', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4041', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9799', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9803', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8330', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5022', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5023', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5026', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5028', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9819', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '5035', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3062', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8325', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8312', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8291', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3047', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4232', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3046', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3080', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'LIARD'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9783', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0014', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8094', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9785', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0214', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9786', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0161', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0326', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0222', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9800', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0140', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8097', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0421', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9806', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0181', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0315', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0289', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9633', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9510', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4351', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9813', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9842', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0316', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0016', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0286', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8109', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '4981', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9958', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '0521', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8306', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3050', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3107', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '3008', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '8123', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;

INSERT INTO shared.park_area_mapping
        (park_area_guid, external_id, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
SELECT pa.park_area_guid, '9955', user, now(), user, now()
FROM   shared.park_area pa
WHERE  pa.region_name = 'Peace'
  AND  pa.name ILIKE 'PEACE'
ON CONFLICT DO NOTHING;
