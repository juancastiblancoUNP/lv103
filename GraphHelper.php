<?php
use Microsoft\Graph\Generated\Models;
use Microsoft\Graph\Generated\Users\Item\MailFolders\Item\Messages\MessagesRequestBuilderGetQueryParameters;
use Microsoft\Graph\Generated\Users\Item\MailFolders\Item\Messages\MessagesRequestBuilderGetRequestConfiguration;
use Microsoft\Graph\Generated\Users\Item\SendMail\SendMailPostRequestBody;
use Microsoft\Graph\Generated\Users\Item\UserItemRequestBuilderGetQueryParameters;
use Microsoft\Graph\Generated\Users\Item\UserItemRequestBuilderGetRequestConfiguration;
use Microsoft\Graph\GraphRequestAdapter;
use Microsoft\Graph\GraphServiceClient;
use Microsoft\Kiota\Abstractions\Authentication\BaseBearerTokenAuthenticationProvider;

require_once 'DeviceCodeTokenProvider.php';
class GraphHelper {
  private static string $clientId = '';
private static string $tenantId = '';
private static string $graphUserScopes = '';
private static DeviceCodeTokenProvider $tokenProvider;
private static GraphServiceClient $userClient;

public static function initializeGraphForUserAuth(): void {
    GraphHelper::$clientId = $_ENV['CLIENT_ID'];
    GraphHelper::$tenantId = $_ENV['TENANT_ID'];
    GraphHelper::$graphUserScopes = $_ENV['GRAPH_USER_SCOPES'];

    GraphHelper::$tokenProvider = new DeviceCodeTokenProvider(
        GraphHelper::$clientId,
        GraphHelper::$tenantId,
        GraphHelper::$graphUserScopes);
    $authProvider = new BaseBearerTokenAuthenticationProvider(GraphHelper::$tokenProvider);
    $adapter = new GraphRequestAdapter($authProvider);
    GraphHelper::$userClient = GraphServiceClient::createWithRequestAdapter($adapter);
}
  public static function getUserToken(): string {
    return GraphHelper::$tokenProvider
        ->getAuthorizationTokenAsync('https://graph.microsoft.com')->wait();
}
}
?>
