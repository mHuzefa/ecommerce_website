const SHOP_WITH_LOCATION_NAMES = `WITH RECURSIVE ShopLocationCTE AS (
  SELECT 
      s.id AS shop_id, 
      s.title, 
      s.type, 
      s.latitude, 
      s.longitude, 
      s.status, 
      s.location_id AS main_location_id,
      l.id AS location_id,
      l.name AS location_name,
      l.parent_id
  FROM 
      shops s
  INNER JOIN 
      locations l ON s.location_id = l.id
  UNION ALL
  SELECT 
      cte.shop_id, 
      cte.title, 
      cte.type, 
      cte.latitude, 
      cte.longitude, 
      cte.status, 
      cte.main_location_id,
      l.id AS location_id,
      l.name AS location_name,
      l.parent_id
  FROM 
      ShopLocationCTE cte
  INNER JOIN 
      locations l ON cte.parent_id = l.id
)
SELECT 
  shop_id, 
  title, 
  type, 
  latitude, 
  longitude, 
  status, 
  main_location_id,
  CONCAT_WS(', ', 
      GROUP_CONCAT(location_name ORDER BY location_id SEPARATOR ', ')
  ) AS location_name
FROM 
  ShopLocationCTE
GROUP BY 
  shop_id, 
  title, 
  type, 
  latitude, 
  longitude, 
  status, 
  main_location_id;
`;

const LOCATION_LEVELS = 'SELECT DISTINCT level as levels FROM locations;';

module.exports = { SHOP_WITH_LOCATION_NAMES, LOCATION_LEVELS };
