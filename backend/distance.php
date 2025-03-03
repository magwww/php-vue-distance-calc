<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data["point1"], $data["point2"])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

function haversine($lat1, $lng1, $lat2, $lng2) {
    $earthRadius = 6371000; // metry
    $dLat = deg2rad($lat2 - $lat1);
    $dLng = deg2rad($lng2 - $lng1);
    $a = sin($dLat / 2) * sin($dLat / 2) +
         cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
         sin($dLng / 2) * sin($dLng / 2);
    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
    return $earthRadius * $c;
}

$lat1 = $data["point1"]["lat"] ?? null;
$lng1 = $data["point1"]["lng"] ?? null;
$lat2 = $data["point2"]["lat"] ?? null;
$lng2 = $data["point2"]["lng"] ?? null;

if ($lat1 === null || $lng1 === null || $lat2 === null || $lng2 === null) {
    http_response_code(400);
    echo json_encode(["error" => "Missing coordinates"]);
    exit;
}

$distanceMeters = haversine($lat1, $lng1, $lat2, $lng2);
$response = [];

if ($distanceMeters >= 1000) {
    $response["km"] = round($distanceMeters / 1000, 2);
} else {
    $response["m"] = round($distanceMeters, 2);
}

echo json_encode($response);
?>
