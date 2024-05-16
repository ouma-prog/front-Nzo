import React from 'react';


const DashboardContent = () => {
  return (
    <div className="p-5 flex-grow">
      <div className="bg-white p-5 rounded shadow">
        <h2 className="font-bold text-lg">Mon tableau de bord</h2>
        <div className="flex justify-around p-5">
          <div>
            <p>Dernière cotisation</p>
            <p className="text-xl font-bold">20 €</p>
          </div>
          <div>
            <p>Cumul cotisation annuel</p>
            <p className="text-xl font-bold">80 €</p>
          </div>
          <div>
            <p>Montant cotisation annuelle</p>
            <p className="text-xl font-bold">120 €</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mt-5">Mes dernières transactions</h3>
          <div className="mt-2">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Montant</th>
                  <th>Mode de paiement</th>
                  <th>Période</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14/01/23</td>
                  <td>+20 €</td>
                  <td>Western Union</td>
                  <td>Décembre 2023</td>
                </tr>
                <tr>
                  <td>14/02/23</td>
                  <td>+0 €</td>
                  <td>-</td>
                  <td>Janvier 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
