import React from 'react';
import { AiFillCreditCard, AiFillCopyrightCircle, AiFillSetting } from 'react-icons/ai';
import { BiCategory, BiUnite, BiGitPullRequest } from 'react-icons/bi';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { FaUsers, FaThList, FaUser } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { MdLocalPharmacy, MdSpaceDashboard } from 'react-icons/md';
import { TbTruckReturn, TbTruckDelivery } from 'react-icons/tb';
import { RiProductHuntFill, RiAdminFill, RiShoppingCartFill, RiProfileFill, RiFileDamageFill } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';
import LinkComponents from './NavbarComponents/LinkComponents';
import DetailsComponent from './NavbarComponents/DetailsComponent';
import UserNavbar from './UserNavbar';

const Sidebar = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <UserNavbar />
                <Outlet />
            </div>
            <div class="drawer-side bg-green-300 p-0 m-0">
                <label for="dashboard" class="drawer-overlay"></label>
                <div class="flex flex-col justify-between">
                    <div>
                        <nav class="flex flex-col mt-6 space-y-1">
                            <LinkComponents to={''} icon={<MdSpaceDashboard className='text-lg' />} name={'Dashboard'} />

                            <DetailsComponent
                                icon={<RiProductHuntFill className='text-lg' />}
                                name={'Products'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'products/pharmacy'}
                                            icon={<MdLocalPharmacy className='text-lg' />}
                                            name={'Pharmacy'} />,

                                        <LinkComponents
                                            to={'products/non-pharmacy'}
                                            icon={<RiProfileFill className='text-lg' />}
                                            name={'Non Pharmacy'} />
                                    ]
                                } />

                            <DetailsComponent
                                icon={<BiGitPullRequest className='text-lg' />}
                                name={'Requested Items'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'requested-items/pharmacy'}
                                            icon={<MdLocalPharmacy className='text-lg' />}
                                            name={'Pharmacy'} />,

                                        <LinkComponents
                                            to={'requested-items/non-pharmacy'}
                                            icon={<RiProfileFill className='text-lg' />}
                                            name={'Non Pharmacy'} />
                                    ]
                                } />

                            <DetailsComponent
                                icon={<RiShoppingCartFill className='text-lg' />}
                                name={'Orders'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'orders/pharmacy'}
                                            icon={<MdLocalPharmacy className='text-lg' />}
                                            name={'Pharmacy'} />,

                                        <LinkComponents
                                            to={'orders/non-pharmacy'}
                                            icon={<RiProfileFill className='text-lg' />}
                                            name={'Non Pharmacy'} />
                                    ]
                                } />

                            <DetailsComponent
                                icon={<AiFillCreditCard className='text-lg' />}
                                name={'Purchases'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'purchases/pharmacy'}
                                            icon={<MdLocalPharmacy className='text-lg' />}
                                            name={'Pharmacy'} />,

                                        <LinkComponents
                                            to={'purchases/non-pharmacy'}
                                            icon={<RiProfileFill className='text-lg' />}
                                            name={'Non Pharmacy'} />
                                    ]
                                } />

                            <DetailsComponent
                                icon={<TbTruckReturn className='text-lg' />}
                                name={'Returns'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'returns/customer'}
                                            icon={<FaUser className='text-lg' />}
                                            name={'Customer'} />,

                                        <LinkComponents
                                            to={'returns/expire-or-damage'}
                                            icon={<RiFileDamageFill className='Expire / Damage' />}
                                            name={'Customer'} />
                                    ]
                                } />

                            <DetailsComponent
                                icon={<AiFillSetting className='text-lg' />}
                                name={'Setup'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'setup/category'}
                                            icon={<BiCategory className='text-lg' />}
                                            name={'Category'} />,

                                        <LinkComponents
                                            to={'setup/unit-type'}
                                            icon={<BiUnite className='text-lg' />}
                                            name={'Unit Type'} />,

                                        <LinkComponents
                                            to={'setup/company'}
                                            icon={<AiFillCopyrightCircle className='text-lg' />}
                                            name={'Company'} />
                                    ]
                                } />

                            <LinkComponents to={'employees'} icon={<RiAdminFill className='text-lg' />} name={'Employees'} />

                            <LinkComponents to={'customers'} icon={<FaUsers className='text-lg' />} name={'Customers'} />

                            <DetailsComponent
                                icon={<TbTruckDelivery className='text-lg' />}
                                name={'Suppliers'}
                                subMenus={
                                    [
                                        <LinkComponents
                                            to={'suppliers/list'}
                                            icon={<FaThList className='text-md' />}
                                            name={'List'} />,

                                        <LinkComponents
                                            to={'suppliers/payment'}
                                            icon={<BsCreditCard2BackFill className='text-lg' />}
                                            name={'Payment'} />,

                                        <LinkComponents
                                            to={'suppliers/documents'}
                                            icon={<HiDocumentText className='text-lg' />}
                                            name={'Documents'} />
                                    ]
                                } />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;