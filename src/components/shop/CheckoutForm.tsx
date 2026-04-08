import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { cartItems } from '@/store/cart';
import { CreditCard, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';

export const CheckoutForm: React.FC = () => {
  const $cartItems = useStore(cartItems);
  const items = Object.values($cartItems);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 5000;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    rut: '',
    phone: '',
    region: '',
    comuna: '',
    address: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Funcionalidad de pago (Flow.cl) se integrará aquí. Redirigiendo...');
    // Aquí iría la lógica para crear la orden en la DB y redirigir a Flow
  };

  const formattedPrice = (price: number) => 
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(price);

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <a href="/catalog" className="btn btn-primary">Volver al catálogo</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="flex-grow space-y-8">
        {/* Contact info */}
        <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
            Información de Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" required className="input input-bordered" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Teléfono</span></label>
              <input type="tel" name="phone" required className="input input-bordered" placeholder="+56 9 1234 5678" value={formData.phone} onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* Shipping info */}
        <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-brand-primary">
            <span className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
            Información de Despacho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text font-bold">Nombre Completo</span></label>
              <input type="text" name="name" required className="input input-bordered" placeholder="Juan Pérez" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-bold">RUT</span></label>
              <input type="text" name="rut" required className="input input-bordered" placeholder="12.345.678-9" value={formData.rut} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-bold">Región</span></label>
              <select name="region" required className="select select-bordered" value={formData.region} onChange={handleChange}>
                <option disabled value="">Seleccionar Región</option>
                <option>Región Metropolitana</option>
                <option>Valparaíso</option>
                <option>Coquimbo</option>
                <option>Biobío</option>
                <option>Araucanía</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-bold">Comuna</span></label>
              <input type="text" name="comuna" required className="input input-bordered" placeholder="Providencia" value={formData.comuna} onChange={handleChange} />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text font-bold">Dirección</span></label>
              <input type="text" name="address" required className="input input-bordered" placeholder="Calle Ejemplo 123, Depto 402" value={formData.address} onChange={handleChange} />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text font-bold">Notas del Pedido (Opcional)</span></label>
              <textarea 
                name="additionalInfo" 
                className="textarea textarea-bordered h-24" 
                placeholder="Instrucciones especiales para el conserje o repartidor..." 
                value={formData.additionalInfo} 
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
            Método de Pago
          </h2>
          <div className="p-4 border-2 border-brand-accent bg-brand-accent/5 rounded-xl flex items-center gap-4">
            <CreditCard className="w-8 h-8 text-brand-primary" />
            <div>
              <p className="font-bold text-brand-primary">Webpay (Flow)</p>
              <p className="text-sm text-slate-500">Paga de forma segura con tarjetas de débito o crédito.</p>
            </div>
            <input type="radio" checked readOnly className="radio radio-primary ml-auto" />
          </div>
        </section>
      </div>

      {/* Order Summary */}
      <aside className="w-full lg:w-[400px]">
        <div className="bg-brand-primary text-white p-8 rounded-[2rem] sticky top-28 shadow-xl">
          <h2 className="text-2xl font-bold mb-8">Resumen</h2>
          
          <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold line-clamp-1">{item.name}</p>
                    <p className="text-xs text-white/60">Cant: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-bold">{formattedPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t border-white/10 pt-6 mb-8">
            <div className="flex justify-between text-white/70">
              <span>Subtotal</span>
              <span>{formattedPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Envío</span>
              <span>{shipping === 0 ? 'Gratis' : formattedPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-3 border-t border-white/10">
              <span>Total</span>
              <span>{formattedPrice(total)}</span>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            className="btn btn-primary btn-block btn-lg bg-brand-accent border-brand-accent text-brand-primary font-bold hover:scale-[1.02] transition-transform"
          >
            Pagar Ahora
          </button>

          <div className="mt-8 space-y-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Pago 100% Seguro cifrado por Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Despacho garantizado por Shipit</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
