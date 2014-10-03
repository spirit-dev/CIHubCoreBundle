<?php

namespace SpiritDev\Bundle\CIHubCoreBundle\DataFixtures\ORM;

use CIHub\CoreBundle\Entity\Project;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class LoadProjectData implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $project1 = new Project();
        $project1->setName('Planning');
        $project1->setDescription('Main planification tools by CSP RSS');
        $project1->setDateCreation(new \DateTime());
        $manager->persist($project1);

        $project2 = new Project();
        $project2->setName('Test');
        $project2->setDescription('Description for test app');
        $project2->setDateCreation(new \DateTime());
        $manager->persist($project2);

        $manager->flush();
    }
}