let obj = JSON.parse($response.body);

    obj.result.vip_expired_at = 4075798974,
    obj.result.is_xy_svip = true,
    obj.result.xy_vip_expire = 0,
    obj.result.is_svip = true

$done({body: JSON.stringify(obj)});
