<?php

namespace SpiritDev\Bundle\CIHubCoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller {
    public function indexAction() {
        $user = $this->getUser();
        return $this->render('@SpiritDevCIHubCore/Default/index.html.twig', array('name' => $user));
    }
}
